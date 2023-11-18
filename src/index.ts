import "dotenv/config";
import { startServer } from "./server/app.js";
import "./server/index.js";
import connectToDatabase from "./database/index.js";

const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  console.log("Missing MongoDB Connection String");
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);
