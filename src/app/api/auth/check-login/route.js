import dbConnect from "@/backend/config/db";

export async function GET(req, res) {
    if (req.method === "GET") {
        try {
            const db = await dbConnect();
            const collection = db.collection('admins');

            let token = getBearerToken(req);
            let currentTime = new Date().toISOString();
            let admin = await collection.findOne({
                token: token, 
                expires_at: {
                    "$gte": currentTime,
                }
            });
            if(admin) {
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

        } catch(error) {
            console.log(error)
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
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