import morgan from "morgan";
import express from "express";
import app from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import robocuteRouter from "../features/robocute/router/robocutesRouter.js";

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/robocutes", robocuteRouter);
