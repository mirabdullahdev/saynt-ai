import dbConnect from "@/backend/config/db";

export async function GET(req, res) {
    if (req.method === "GET") {
        try {
            let where = addFilters(req);

            let contacts = await getBlogs(req, where);

            if(contacts) {
                return Response.json(
                    {
                        status: true,
                        data: contacts,
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
                        data: [],
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

const getBlogs = async (req, where = {}) => {
    const db = await dbConnect();
    const collection = db.collection('blogs');

    let { searchParams } = new URL(req.url);
    let limit = parseInt(searchParams.get('limit') || 14);
    let page = parseInt(searchParams.get('page') || 1);

    let skip = (page - 1) * limit;

    let sort = searchParams.get('sort');
    let direction = searchParams.get('direction');
    sort = { [sort]: direction == "desc" ? -1 : 1 };

    // let listing = await collection.find(where).sort(sort).skip(skip).limit(limit).toArray();
    // let count = await collection.countDocuments(where);
    // console.log(where)
    let listing = await collection.aggregate([
        { $match: where },
        { $sort: sort },
        { $skip: skip },
        { $limit: limit },
        {
            $addFields: {
                category: { $toObjectId: "$category" }
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
        { $project: { categoryData: 0, category: 0 } }
    ]).toArray();


    return {
        data: listing,
        // count: count,
        // page: page,
        // totalPages: Math.ceil(count / limit),
    };
}

const addFilters = (req) => {
    const { searchParams } = new URL(req.url);
    let where = {};

    let search = searchParams.get('search');
    if(search) {
        where['$or'] = [
            {
                title: { 
                    $regex: search, 
                    $options: 'i' 
                }
            },
            {
                description: { 
                    $regex: search, 
                    $options: 'i' 
                }
            },
            {
                created_at: { 
                    $regex: search, 
                    $options: 'i' 
                }
            },
            {
                _id: { 
                    $regex: search.toString(), 
                    $options: 'i' 
                }
            }
        ]
    }

    let status = searchParams.get('status');
    if(status) {
        if(status == "publish") {
            where.status = {
                $eq: 1
            };
        } else if (status == "unpublish") {
            where.status = {
                $eq: 0
            };
        }
    }

    let createdAtFrom = searchParams.get('createdAtFrom');
    let createdAtTo = searchParams.get('createdAtTo');

    if(createdAtFrom || createdAtTo) {
        where.created_at = {};

        if(createdAtFrom) {
            where.created_at.$gte = new Date(`${createdAtFrom}T00:00:00Z`);
        }
        
        if(createdAtTo) {
            where.created_at.$lte = new Date(`${createdAtTo}T23:59:59Z`);
        }
    }

    return where;
}
