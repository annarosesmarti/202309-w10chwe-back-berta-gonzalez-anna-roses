import request from "supertest";
import "../../../server/index";
import app from "../../../server/app";

describe("Given a GET method with a '/' endpoint", () => {
  describe("When it receives a request", () => {
    test("Then it should respond with a message '🏓'", async () => {
      const expectedStatusCode = 200;
      const path = "/";
      const expectedMessage = "🏓";

      const response = await request(app).get(path).expect(expectedStatusCode);

      expect(response.body).toHaveProperty("message", expectedMessage);
    });
  });
});
