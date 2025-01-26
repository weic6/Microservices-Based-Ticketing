import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
	console.log(err);
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
    return;
    // res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }
  // other error
  res.status(400).send({ errors: [{ message: "Something went wrong" }] });
};
