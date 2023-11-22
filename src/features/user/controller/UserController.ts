import { type NextFunction, type Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { type UserCredentialStructure } from "../types";
import type UserMongooseRepository from "../repository/userMongooseRepository.js";
import CustomError from "../../../CustomError/CustomError.js";

class UserController {
  constructor(private readonly userRepository: UserMongooseRepository) {}

  loginUser = async (
    req: UserCredentialStructure,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const { username, password } = req.body;
      const user = await this.userRepository.getUser(username, password);
      const userData: JwtPayload = { sub: user._id, name: user.name };
      const token = jwt.sign(userData, process.env.JWT_SECRET_KEY!);

      res.status(200).json({ token });
    } catch {
      const customError = new CustomError("Wrong credentials", 401);

      next(customError);
    }
  };
}

export default UserController;
