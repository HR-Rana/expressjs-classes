


const GetUser = (req, res, next) =>{
    res.status(200).json({
        statusCode: 200,
        message: "Get User successfully",
    })
}


const CreateUser = (req, res, next) =>{
    res.status(200).json({
        statusCode: 200,
        message: "Create User successfully",
    })
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