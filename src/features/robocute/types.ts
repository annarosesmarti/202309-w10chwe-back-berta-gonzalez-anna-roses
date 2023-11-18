export interface RoboCuteStructure {
  _id: string;
  name: string;
  movie: string;
  planet: string;
  height: string;
  occupation: string;
  image: string;
  endurance: string;
  speed: string;
}

export interface RobocutesRepository {
  getRobocutes: () => Promise<RoboCuteStructure[]>;
}
