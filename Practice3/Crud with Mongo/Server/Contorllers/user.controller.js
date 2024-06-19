 const User = require("../model/userSchema")


const GetUser = (req, res, next) =>{
    res.status(200).json({
        statusCode: 200,
        message: "Get User successfully",
    })
}



// handle Create New user 
const CreateUser = async (req, res, next) =>{
   try {
    const newUser = new User({
        id:req.body.id,
        name:req.body.name,
        phone:req.body.phone,
        password:req.body.password,
    })
    await newUser.save();
    res.status(201).json(newUser)
   } catch (error) {
    res.status(500).send(error.message);
    console.log(error.message);
   }
}






const UpdateUser = (req, res, next) =>{
    res.status(200).json({
        statusCode: 200,
        message: "Update User successfully",
    })
}


const DeleteUser = (req, res, next) =>{
    res.status(200).json({
        statusCode: 200,
        message: "Delete User successfully",
    })
}



module.exports = {GetUser, CreateUser, UpdateUser, DeleteUser}