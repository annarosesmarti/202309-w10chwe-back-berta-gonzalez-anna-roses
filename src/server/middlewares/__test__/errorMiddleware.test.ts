import type { NextFunction, Request, Response } from "express";
import notFound from "../errors/errorMiddleware";
import type CustomError from "../../../CustomError/CustomError";

describe("Given a Middleware notFound method", () => {
  describe("When it receives a response", () => {
    test("Then it should call the next function with a 404 status and a 'Endpoint not found error'", () => {
      const req = {};
      const res = {};
      const next = jest.fn();

      const expectedError: Partial<CustomError> = {
        statusCode: 404,
        message: "Endpoint not found",
      };

      notFound(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalledWith(expect.objectContaining(expectedError));
    });
  });
});
