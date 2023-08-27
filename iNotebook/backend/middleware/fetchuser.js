var jwt = require('jsonwebtoken');
const JWT_SECRET="Tusharisagoodb$oy";
const fetchuser=(req,res,next)=>{
    // Get the user from jwt token and add id to req object

    const token=req.header("auth-token");
    if(!token){
        res.status(401).send({error:"Pls authenticate using a valid token"})
    }
    try{
        const data=jwt.verify(token,JWT_SECRET)
        req.user=data.User;
        next()
    }
    catch(error){
        res.status(401).send({error:"Pls authenticate using a valid token"})
    }
}

module.exports=fetchuser