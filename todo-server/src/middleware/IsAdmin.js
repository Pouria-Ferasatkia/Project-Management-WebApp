const { Role } = require("../../Role")
const User = require("../model/User")


async function IsAdmin(req, res, next){

    const username = req.user
    if(!username){
        return res.status(403).send({message:"error not user"})
    }
    const adminRole = await User.findOne(username).select({ "role": 1, "_id": 0}).catch(() =>{
        return res.status(403).send({message:"error db"})
    
    })

    if(!adminRole){
        return res.status(403).send({message:"Not Allowed"})
    }
  

    if(adminRole.role != Role.ADMIN){
        return res.status(403).send({message:"not allowed just admin"})
    }

    next()

}
  
module.exports={
    IsAdmin
  }