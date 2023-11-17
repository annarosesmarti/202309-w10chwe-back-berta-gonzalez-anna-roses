import morgan from "morgan";
import express from "express";
import app from "./app";

app.use(morgan("dev"));
app.use(express.json());
