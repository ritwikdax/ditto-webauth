import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction)=>{

    console.error('Error Occurred', error);
    res.status(500).json({
        status: 'error',
        message: error.message,
    })

}