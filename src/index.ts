import { startServer } from "./server/app";

const port = process.env.PORT ?? 4000;

startServer(+port);
