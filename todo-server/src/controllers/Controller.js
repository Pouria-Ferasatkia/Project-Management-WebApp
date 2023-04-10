const { Role } = require("../../Role");
const Note = require("../model/Note");
const User = require("../model/User");
const { use } = require("../routes/Route");

(async() =>{
  const user = await User.findOne({username:"test2"})
  user.role = Role.ADMIN
  await user.save()
  console.log(user)
 
})();

exports.register = async (req, res) => {

  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password){
    return res.status(403).send({message:"username&password needed"})
  }
  const user = await User.findOne({username:username})
  if(user){
    return res.status(403).send({message:"User exist"})
  }

  
  const newUser = await User.create({username:username,password:password}).catch(()=> {
    return res.status(403).send({message:"error newuser"})
  })
  
  //res.cookie('cookieName',newUser.session, { httpOnly: true });

  res.status(200).send({message:newUser.session})


  };

exports.login = async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password){
      return res.status(403).send({message:"username&password needed"})
    }
    const user = await User.findOne({username:username}).catch(() => {
      return res.status(403).send({message:"error login"})
    })
    if(!user){
      return res.status(403).send({message:"User doesnt exist"})
    }
  
   // res.cookie('cookieName',user.session, { httpOnly: true });
  
    return res.status(200).send({message:user.session})
  
  
    };

exports.notes = async (req, res) => {

  
  const user = req.user
  await Note.find({owner:user}).then((notes) => {
    res.status(200).send(notes);
  });
  };

exports.noteId = async (req, res) => {
    const id = req.params.id
    await Note.findById(id).then((note) => {
      return res.status(200).send(note);
    }).catch(() =>{
      return res.status(403).send({message:"error noteid"})
    })
    };
  

exports.publish = async (req, res) => {
    const title = req.body.title
    const describe = req.body.describe
    const username = req.body.username
    if(!title || !username || !describe){
      return res.status(403).send({message:"needed body"})
    }

    const user = await User.findOne({username:username}).catch(() => {
      return res.status(403).send({message:"error username"});
    })

    if(!user){
      return res.status(403).send({message:"invalid username"})
    }

    await Note.create({title:title,describe:describe,owner:user}).catch(() => {
      return res.status(403).send({message:"error publish"})
    })

    return res.status(200).send({message:"ok"})
  
  };


exports.getUsers = async (req, res) => {


    const users = await User.find({}).select({ "username": 1, "_id": 0}).catch(() => {
      return res.status(403).send({message:"why error"})
    })

    return res.status(200).send(users)
  
  };

exports.deleteAll = async (req, res) => {

    await Note.deleteMany({}).catch(() => {
      return res.status(403).send({message:"error note"})
    })
    await User.deleteMany({}).catch(() => {
      return res.status(403).send({message:"error user"})
    })
    return res.status(200).send({message:"ok"})
  
  };


  exports.checkAdmin = async (req, res) => {

    return res.status(200).send({message:"its admin"})
  
  };

  exports.checkAuth = async (req, res) => {

    return res.status(200).send({message:"its auth"})
  
  };




