import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import mongoose from "mongoose";
import app from "../../../../server/app";
import "../../../../server/index";
import connectToDatabase from "../../../../database/index";
import { type RoboCuteStructure } from "../../types";
import mockRobocute from "../../../mocks/mockRobocute";
import Robocute from "../../model/robocute";

let server: MongoMemoryServer;

beforeAll(async () => {
  server = await MongoMemoryServer.create();
  const mongoUrl = server.getUri();
  await connectToDatabase(mongoUrl);
});

afterAll(async () => {
  await mongoose.disconnect();
  await server.stop();
});

describe("Given a GET method with a '/robocute' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should response with a status 200 and a list of 2 robocutes", async () => {
      const expectedStatusCode = 200;
      const path = "/robocute";
      await Robocute.create(mockRobocute);

      const response = await request(app).get(path).expect(expectedStatusCode);
      const responseBody = response.body as { robocutes: RoboCuteStructure[] };

      responseBody.robocutes.forEach((robocute, robocutePosition) => {
        expect(robocute).toHaveProperty(
          "name",
          mockRobocute[robocutePosition].name,
        );
      });
    });
  });
});
