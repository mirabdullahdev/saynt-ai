import { getOne, modifyOne } from "@/backend/queries";

export async function POST(req, { params }) {
    try {
        params = await params;
        let id = params.id;

        let data = await req.json();
        
        let blogData = {
            title: data.title,
            description: data.description,
            updated_at: new Date(),
            status: data.status,
            category: data.category,
            image: data.filePath ? data.filePath : data.image
        }

        let updated = await modifyOne('blogs', id, blogData);

        if(updated) {
            return Response.json(
                {
                    status: true,
                    data: data,
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