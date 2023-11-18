import type { Request, Response } from "express";
import type { RobocutesRepository } from "../types.js";

class RobocuteController {
  constructor(private readonly robocutesRepository: RobocutesRepository) {}

  public getRobocutes = async (_req: Request, res: Response): Promise<void> => {
    const robocutes = await this.robocutesRepository.getRobocutes();

    res.status(200).json({ robocutes });
  };
}

export default RobocuteController;
