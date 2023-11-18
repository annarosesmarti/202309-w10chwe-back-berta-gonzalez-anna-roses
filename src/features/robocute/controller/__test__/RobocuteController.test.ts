import type { Request, Response } from "express";
import mockRobocute from "../../../mocks/mockRobocute";
import type { RoboCuteStructure, RobocutesRepository } from "../../types";
import RobocuteController from "../RobocuteController";

describe("Given a RobocuteController getRobocutes method", () => {
  describe("When it receives a response", () => {
    const robocutes: RoboCuteStructure[] = mockRobocute;
    const robocutesRepository: RobocutesRepository = {
      getRobocutes: jest.fn().mockResolvedValue(robocutes),
    };

    const robocutesController = new RobocuteController(robocutesRepository);

    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it should call its method with status 200", async () => {
      const expectedStatusCode = 200;

      await robocutesController.getRobocutes(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call it method with 'Arturito' and 'C3PO' robots", async () => {
      const expectedRobocutes = robocutes;

      await robocutesController.getRobocutes(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ robocutes: expectedRobocutes });
    });
  });
});
