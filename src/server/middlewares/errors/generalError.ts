import { type NextFunction, type Request, type Response } from "express";
import { type Error } from "mongoose";

const generalError = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.status(401).json({ error: "User not found" });
};

export default generalError;
