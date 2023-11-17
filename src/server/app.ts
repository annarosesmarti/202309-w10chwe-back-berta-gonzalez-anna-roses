import chalk from "chalk";
import express from "express";

const app = express();

export const startServer = (port: number) => {
  app.listen(port, () => {
    console.log(
      chalk.blue(
        `Server listening on ${chalk.bgBlueBright`http://localhost:${port}`}`,
      ),
    );
  });
};

export default app;
