import type { Request, Response } from "express";
import notFound from "../errorMiddleware";

describe("Given a Middleware notFound method", () => {
  describe("When it receives a response", () => {
    const mockStatus = jest.fn().mockReturnThis();

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: mockStatus,
      json: jest.fn(),
    };

    const expectedStatusCode = 404;

    test("Then it should call it's method status 200", () => {
      notFound(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call it's method with an error message 'Endpoint not found'", () => {
      const expectedErrorMessage = { error: "Endpoint not found" };

      notFound(req as Request, res as Response);

      expect(res.status(expectedStatusCode).json).toHaveBeenCalledWith(
        expectedErrorMessage,
      );
    });
  });
});
