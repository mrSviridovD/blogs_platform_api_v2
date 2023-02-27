import {NextFunction, Response, Request} from "express";
import {validationResult} from "express-validator";

export const inputValidationMiddleware = (req:Request, res:Response, next:NextFunction) =>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
    } else{
        next()
    }
}