import { getOne } from "@/backend/queries";

export async function GET(req, { params }) {
    try {
        params = await params;
        let id = params.id;

        let contact = await getOne('contacts', id);

        if(contact) {
            return Response.json(
                {
                    status: true,
                    data: contact,
                    message: "Data Fetched Successfully!",
                }, 
                {
                    status: 200,
                }
            )
        } else {
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
}