import { getBearerToken } from "@/backend/helpers";
import { getAllWhere, modifyOne } from "@/backend/queries";

export async function GET(req, res) {
    try {
      let token = getBearerToken(req);
      let admin = await getAllWhere("admins", {token: { $eq: token }})

      if(admin && admin[0]) {
        await modifyOne("admins", admin[0]._id, {token: null, expires_at: null})

        return Response.json(
          {
            status: true,
            message: "Logged Out Successfully",
          }, 
          {
            status: 200,
          }
        )
      } else {
        return Response.json(
          {
            status: false,
            message: "Something's Wrong!!!",
          }, 
          {
            status: 403,
          })
      }
    } catch (error) {
      console.log(error)
    }
}
