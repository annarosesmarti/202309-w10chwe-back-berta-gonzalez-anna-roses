import { Router } from "express";
import RobocuteMongooseRepository from "../repository/RobocuteMongooseRepository.js";
import RobocuteController from "../controller/RobocuteController.js";

const robocuteRouter = Router();

const robocuteMongooseRepository = new RobocuteMongooseRepository();
const robocuteController = new RobocuteController(robocuteMongooseRepository);

robocuteRouter.get("/", robocuteController.getRobocutes);

export default robocuteRouter;
