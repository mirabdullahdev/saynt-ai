import { checkVar, sendMailTemplate } from "@/backend/helpers";
import { add, modifyOne } from "@/backend/queries";

export async function POST(req) {
    if (req.method === "POST") {
        try {
            const { searchParams } = new URL(req.url);

            const data = await req.json();
            const type = searchParams.get('type');

            let toEmail = process.env.TO_EMAIL;
            let codes = {
                "{fullname}": data.fullname,
                "{first_name}": data.first_name,
                "{last_name}": data.last_name,
                "{country_origin}": data.country_origin,
                "{state}": data.state,
                "{relocate}": data.relocate,
                "{employment_status}": data.employment_status,
                "{comments}": data.comments,
                "{phonenumber}": data.phonenumber,
                "{appointment}": new Date(data.appointment),
                "{email}": checkVar(data.email) ? data.email : "",
            };

            let contactData = {
                fullname: data.fullname || data.first_name,
                phonenumber: data.phonenumber,
                email: data.email,
                type: type,
                appointment: data.appointment,
                job_data: data,
                created_at: new Date(),
                updated_at: new Date(),
            };

            let contactAdded = await add("contacts", contactData);

            if(contactAdded)
            {
                const mailSent = await sendMailTemplate(toEmail, type, codes);
                
                if(mailSent)
                {
                    modifyOne("contacts", contactAdded.insertedId, {mailSend: 1})
                    
                    return Response.json(
                        {
                            status: true,
                            message: "Mail Send Successfully!",
                        }, 
                        {
                            status: 200,
                        }
                    ) 
                }
                else
                {
                    modifyOne("contacts", contactAdded.insertedId, {mailSend: 0})
                    return Response.json(
                        {
                            status: false,
                            message: "Something's Went Wrong",
                        }, 
                        {
                            status: 400,
                        }
                    )
                }
            }
            else
            {
                return Response.json(
                    {
                        status: true,
                        message: "Something's Went Wrong",
                    }, 
                    {
                        status: 400,
                    }
                )
            }

        } catch(error) {
            console.log(error)
            return Response.json(
                {
                    status: false,
                    message: "Something's Went Wrong",
                }, 
                {
                    status: 400,
                }
            )
        }
    } else {
        return Response.json(
            {
                status: false,
                message: "Method Not Allowed",
            }, 
            {
                status: 405,
            }
        )
    }
}
