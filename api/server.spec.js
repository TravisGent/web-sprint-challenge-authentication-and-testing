const supertest = require("supertest");
const server = require("./server.js");

describe("server", () => {
  describe("GET /api/jokes", () => {
    it("should return 401, you shall not pass!", () => {
      return supertest(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
    it("should return you: shall not pass!", () => {
      return supertest(server).get("/api/jokes").expect({ you: "shall not pass!" });
    });
  });
});