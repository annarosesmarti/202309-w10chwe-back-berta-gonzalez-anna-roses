import type { RoboCuteStructure, RobocutesRepository } from "../types.js";
import Robocute from "../model/robocute.js";

export class RobocuteMongooseRepository implements RobocutesRepository {
  public getRobocutes = async (): Promise<RoboCuteStructure[]> => {
    const robocutes = await Robocute.find();

    return robocutes;
  };
}

export default RobocuteMongooseRepository;
