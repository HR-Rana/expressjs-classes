

let AuthMiddleware = (req, res, next)=>{
    console.log("Auth Middleware");
    next();
}



module.exports = AuthMiddleware;