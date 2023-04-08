const User = require("../model/User");


async function IsAuth (req, res, next){
    const auth = req.headers.authorization?.split(' ')[1];

    if(!auth){
      return res.status(401).send({message:'Access forbidden not auth'});
    }
    const user = await User.findOne({session:auth}).catch(() => {
      return res.status(403).send({message:"error"});
    })
    if (user) {
      req.user = user
      console.log(user)
      next();
    } else {
      return res.status(401).send({message:'Access forbidden error'});
    }
}


module.exports={
  IsAuth
}