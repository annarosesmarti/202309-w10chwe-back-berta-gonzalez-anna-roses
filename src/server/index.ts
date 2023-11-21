import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import robocuteRouter from "../features/robocute/router/robocutesRouter.js";
import notFound from "../features/robocute/middleware/errorMiddleware.js";
import { userRouter } from "../features/user/router/userRouter.js";

app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "mongodb+srv://bertaGM:Avecesveocodig0@cluster0.cx04w49.mongodb.net/",
      "mongodb+srv://bertaGM:Avecesveocodig0@cluster0.cx04w49.mongodb.net/robocute",
    ],
  }),
);
app.use(express.json());

app.use("/", pingRouter);
app.use("/robots", robocuteRouter);
app.use("/login", userRouter);
app.use(notFound);
