import { modifyOne } from "@/backend/queries";

export async function POST(req) {
    try{
        const data = await req.json();
        let id = data.id;
        let status = data.status;
        let collection = data.collection;

        let res = await modifyOne(collection, id, {status: status ? 1 : 0});

        if(res) {
            return Response.json(
                {
                    status: true,
                    message: "Status Change Successfully!",
                }, 
                {
                    status: 200,
                }
            ) 
        } else {
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

    } catch(error) {
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