import dbConnect from "@/backend/config/db";
import bcrypt from 'bcrypt';
import crypto from 'crypto';

export async function POST(req, res) {
  if (req.method === "POST") {
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return Response.json(
        {
          status: false,
          message: "Email and password are required",
        }, 
        {
          status: 400,
        }
      )
    }
    
    try {
      let admin = await checkLogin(email, password);

      if(admin) {
        let updatedAdmin = await makeSession(admin);

        return Response.json(
          {
            status: true,
            message: "Logged In Successfully",
            data: updatedAdmin,
          }, 
          {
            status: 200,
          }
        )
      } else {
        return Response.json(
          {
            status: false,
            message: "Invalid Credentials!!!",
          }, 
          {
            status: 403,
          })
      }
    } catch (error) {
      console.log(error)
    }

    return Response.json({status: true})

  } else {
    return Response.json(
      {
        status: false,
        message: "Method Not Allowed!!!",
      }, 
      {
        status: 405,
      })
  }
}


const checkLogin = async (email, password) => {
  const db = await dbConnect();
  const collection = db.collection('admins');
  let admin = await collection.findOne({email: email});

  if(admin) {
    const match = await bcrypt.compare(password, admin.password);
  
    if(match) {
      return admin;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const makeSession = async (admin) => {
  const db = await dbConnect();
  const collection = db.collection('admins');

  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1)

  let adminWhere = {_id: admin._id};
  let updateData = {
    token: generateToken(),
    expires_at: currentDate.toISOString(),
  }
  
  let updated = await collection.findOneAndUpdate(adminWhere, { $set: updateData }, { returnDocument: "after", upsert: false });  
  return updated;
}

const generateToken = (bytes = 16) => {
  return crypto.randomBytes(bytes).toString('hex');
}
