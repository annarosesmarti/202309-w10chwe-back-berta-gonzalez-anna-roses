import type { RoboCuteStructure, RobocutesRepository } from "../types.js";
import Robocute from "../model/robocute.js";

export class RobocuteMongooseRepository implements RobocutesRepository {
  public async getRobocutes(): Promise<RoboCuteStructure[]> {
    const robocutes = await Robocute.find();

    return robocutes;
  }
}

export default RobocuteMongooseRepository;
