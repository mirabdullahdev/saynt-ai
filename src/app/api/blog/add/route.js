import { add, getOne } from "@/backend/queries";
import { ObjectId } from "mongodb";

export async function POST(req) {
    try {
        let data = await req.json();
        
        let blogData = {
            title: data.title,
            description: data.description,
            created_at: new Date(),
            updated_at: new Date(),
            status: data.status,
            category: data.category,
            image: data.filePath
        }

        let added = await add("blogs", blogData);

        if(added) {
            return Response.json(
                {
                    status: true,
                    message: "Data Added Successfully!",
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

const bulkActions = async (ids, type) => {
    if(type == "delete") {
        const result = await removeAllWhere('contacts', { _id: { $in: ids.map(id => ObjectId.createFromHexString(id)) } })
        return result;
    }
    
    let updateData = {};
    if(type == "publish") {
        updateData = { status: 1 };
    } else if (type == "unpublish") {
        updateData = { status: 0 };
    }
    console.log(updateData)
    const result = await modifyAllWhere('contacts', { _id: { $in: ids.map(id => ObjectId.createFromHexString(id)) } }, updateData);
    return result;
}