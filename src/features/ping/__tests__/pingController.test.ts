import { type Request, type Response } from "express";
import PingController from "../controller/pingController";

describe("Given a PingController's getPong method", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      const pingController = new PingController();
      const mock = jest.fn().mockReturnThis();
      const req = {};
      const mockResponse: Pick<Response, "status" | "json"> = {
        status: mock,
        json: jest.fn(),
      };
      const expectedStatusCode = 200;

      pingController.getPong(req as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
