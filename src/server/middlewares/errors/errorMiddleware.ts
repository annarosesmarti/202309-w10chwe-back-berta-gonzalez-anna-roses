import type { NextFunction, Request, Response } from "express";
import CustomError from "../../../CustomError/CustomError.js";

const notFound = (_req: Request, res: Response, next: NextFunction) => {
  const customError = new CustomError("Endpoint not found", 404);

  next(customError);
};

export default notFound;
