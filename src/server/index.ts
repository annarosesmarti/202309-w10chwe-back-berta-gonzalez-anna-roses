import morgan from "morgan";
import express from "express";
import app from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import robocuteRouter from "../features/robocute/router/robocutesRouter.js";
import notFound from "../features/robocute/middleware/errorMiddleware.js";

app.use(morgan("dev"));
app.use(express.json());

app.use("/", pingRouter);
app.use("/robots", robocuteRouter);
app.use(notFound);
