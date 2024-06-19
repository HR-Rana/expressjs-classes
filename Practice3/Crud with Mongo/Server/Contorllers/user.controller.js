 const User = require("../model/userSchema")


const GetUser = async (req, res, next) =>{
    try {
        const AllUsers = await User.find();
        res.status(200).json(AllUsers)
    } catch (error) {
        res.status(error.status).json(error.message);
    }
}


// get Single user by Phone number
const GetUserByPhoneNumber = async (req, res, next) => {
    const phoneNumber = req.params.phone;
    const id = req.params.id;
    
    try {
      const findUser = await  User.findOne({phone: phoneNumber});
      res.status(200).json(findUser)
    } catch (error) {
        error.status(404).json(error.message);
    }


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






const UpdateUser = async (req, res, next) =>{
    try {
        const getUser = await User.findOne({_id:req.params.id});
        getUser.name = req.body.name;
        getUser.id = req.body.id;
        getUser.save();

        res.status(200).json({
            statusCode: 200,
            message: "Update User successfully",
        })
    } catch (error) {
        res.status(error.statusCode).json({error: error.message})
    }

}


const DeleteUser = async(req, res, next) =>{
   try {
   await User.deleteOne({_id:req.params.id});
   res.status(200).json({
    statusCode: 200,
    message: "Delete User successfully",
   })
   } catch (error) {
    res.status(error.statusCode).json({error: error.message})
   }
}



module.exports = {GetUser, CreateUser, UpdateUser, DeleteUser, GetUserByPhoneNumber}