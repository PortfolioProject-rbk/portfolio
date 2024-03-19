const { User } = require("./model")

const jwt = require("jsonwebtoken")


module.exports = {

  createUser : async (req,res)=>{
  try{
    const {username,password} = req.body 
     const checkusername = await User.findOne({where : {username:username}})
     if (checkusername){
        res.status(400).json({error:"username already exist "})
     }
   const user =  await User.create({
    
    username:username ,
    password:password
   }
   
   )
   
  res.status(201).json(user)
  } catch (error){
   
    console.log(req.body)
    res.status(500).json(error+"aeazeazeazeaeazeaea")
  }
} 
    


 

}