import { NextFunction, RequestHandler, Request, Response } from "express";

export const authorizeHandler: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsedToken = JSON.parse(String(req.body.token));
    console.log('Received Payload', req.body);
    res.json(parsedToken);
  } catch (err) {
    res.json({
      authenticate: err,
      clientInfo: "JSON Parse failed",
    });
  }
};
