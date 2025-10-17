import dbConnect from "@/backend/config/db";

export async function GET(req, res) {
    if (req.method === "GET") {
        try {
            const db = await dbConnect();
            const collection = db.collection('admins');
            let token = getBearerToken(req);
            
            if(token)
            {
                let currentDate = new Date();
                let currentTime = currentDate.toISOString();
                let admin = await collection.findOne({
                    token: token, 
                    expires_at: {
                        "$gte": currentTime,
                    }
                });
                
                if(admin) {
                    await collection.findOneAndUpdate({_id: admin._id}, {$set: {expires_at: currentDate.setDate(currentDate.getDate() + 1)}})
                    let adminWhere = {_id: admin._id};
                    let updateData = {
                        expires_at: currentDate.toISOString(),
                    }
                    let updated = await collection.findOneAndUpdate(adminWhere, { $set: updateData }, { returnDocument: "after", upsert: false });  
                    console.log('updated')                 

                    return Response.json(
                        {
                            status: true,
                            message: "Logged In",
                        }, 
                        {
                            status: 200,
                        }
                    )
                } else {
                    return Response.json(
                        {
                            status: false,
                            message: "Session Expired",
                        }, 
                        {
                            status: 403,
                        }
                    )
                }
            } else {
                return Response.json(
                    {
                        status: false,
                        message: "Session Expired",
                    }, 
                    {
                        status: 403,
                    }
                )
            }
            
        } catch(error) {
            return Response.json(
                {
                    status: false,
                    message: "Something went wrong",
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

const getBearerToken = (req) => {
    let authorization = req.headers.get('authorization')
    if(authorization) {
        let tokenArr = authorization.split(" ");
        let token = tokenArr[1];

        return token;
    } else {
        return false;
    }
}