import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validateSchema = (
  body?: ZodSchema,
  query?: ZodSchema,
  param?: ZodSchema
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      body && body.parse(req.body);
      query && query.parse(req.query);
      param && param.parse(req.params);
      next();
    } catch (err) {
      next(err);
    }
  };
};
