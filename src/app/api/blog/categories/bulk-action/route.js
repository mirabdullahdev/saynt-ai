import { modifyAllWhere, removeAllWhere } from "@/backend/queries";
import { ObjectId } from "mongodb";

export async function POST(req, res) {
    try {
        let data = await req.json();
        let ids = data.ids;
        let type = data.type;

        let updated = await bulkActions(ids, type);

        if(updated) {
            return Response.json(
                {
                    status: true,
                    message: "Data Updated Successfully!",
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
        const result = await removeAllWhere('blogs-categories', { _id: { $in: ids.map(id => ObjectId.createFromHexString(id)) } })
        return result;
    }
    
    let updateData = {};
    if(type == "publish") {
        updateData = { status: 1 };
    } else if (type == "unpublish") {
        updateData = { status: 0 };
    }
    
    const result = await modifyAllWhere('blogs-categories', { _id: { $in: ids.map(id => ObjectId.createFromHexString(id)) } }, updateData);
    return result;
}