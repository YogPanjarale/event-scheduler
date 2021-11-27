import {Request,Response,NextFunction}from 'express';
const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    if (req.headers.authorization!==process.env.AUTH_TOKEN) {
        return res.status(401).send('Unauthorized');
    }

    return next()
}
export default authMiddleware;