import dbConnect from "@/backend/config/db";
import { formatId, getOne } from "@/backend/queries";

export async function GET(req, { params }) {
    try {
        params = await params;
        let id = params.id;

        // let data = await getOne('blogs', id);
        let data = await getBlog(id);

        if(data && data.length > 0) {
            return Response.json(
                {
                    status: true,
                    data: data[0],
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


const getBlog = async (id) => {
    const db = await dbConnect();
    const collection = db.collection('blogs');

    let data = await collection.aggregate([
        { $match: { _id: formatId(id) } }, // Convert `id` to ObjectId
        {
            $addFields: {
                category: { $toObjectId: "$category" } // Convert category to ObjectId
            }
        },
        {
            $lookup: {
                from: "blogs-categories",
                localField: "category",
                foreignField: "_id",
                as: "categoryData"
            }
        },
        {
            $addFields: {
                categoryTitle: { $arrayElemAt: ["$categoryData.title", 0] }
            }
        },
        { $project: { categoryData: 0 } } // Remove categoryData array
    ]).toArray();
    
    return data;
}