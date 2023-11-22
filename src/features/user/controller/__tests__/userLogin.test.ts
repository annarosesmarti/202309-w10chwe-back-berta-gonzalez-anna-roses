import "dotenv/config";
import { type NextFunction, type Response } from "express";
import jwt from "jsonwebtoken";
import {
  type UserCredentialStructure,
  type UserWithoutPassword,
} from "../../types";
import UserController from "../UserController";
import type UserMongooseRepository from "../../repository/userMongooseRepository";
import type CustomError from "../../../../CustomError/CustomError";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a UsersController's loginUser method", () => {
  const req: Pick<UserCredentialStructure, "body"> = {
    body: {
      username: "TunoMami",
      password: "QueEsEsaPiedraDelCielo",
    },
  };
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request with a valid password and a username", () => {
    const expectedStatusCode = 200;
    const userData: UserWithoutPassword = {
      _id: "",
      name: "",
      username: "TunoMami",
    };
    const userRepository: Pick<UserMongooseRepository, "getUser"> = {
      getUser: jest.fn().mockResolvedValue(userData),
    };

    const token = "AHRTPIUHQR3PTIUY53PNTY";
    jwt.sign = jest.fn().mockReturnValue({ token });

    test("Then it should call the status method of the response with status code 200", async () => {
      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const usersController = new UserController(userRepository);
      await usersController.loginUser(
        req as UserCredentialStructure,
        res as Response,
        next,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call the JSON method of the response with the token 'AHRTPIUHQR3PTIUY53PNTY'", async () => {
      const usersController = new UserController(userRepository);

      await usersController.loginUser(
        req as UserCredentialStructure,
        res as Response,
        next,
      );

      expect(res.json).toHaveBeenCalledWith({ token: { token } });
    });
  });
  describe("When it receives a request with an invalid password and username", () => {
    const userRepository: Pick<UserMongooseRepository, "getUser"> = {
      getUser: jest.fn().mockRejectedValue("error"),
    };
    const usersController = new UserController(userRepository);

    const token = "AHRTPIUHQR3PTIUY53PNTY";
    jwt.sign = jest.fn().mockReturnValue({ token });

    test("Then it should call the status method of the response with status code 401", async () => {
      await usersController.loginUser(
        req as UserCredentialStructure,
        res as Response,
        next,
      );

      const expectedError = { message: "Wrong credentials", statusCode: 401 };

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });

    test("Then it should call the json method of the response with an error message", async () => {
      const expectedError: Partial<CustomError> = {
        message: "Wrong credentials",
        statusCode: 401,
      };

      await usersController.loginUser(
        req as UserCredentialStructure,
        res as Response,
        next,
      );

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
