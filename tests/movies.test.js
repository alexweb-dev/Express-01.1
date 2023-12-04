const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
describe("GET /api/movies/:id", () => {
    it("movie by id", async () => {
      const response = await request(app).get("/api/movies/1");
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("id", 1);
      expect(response.body.id).toBe(1);
      expect(response.body.title).toBe("Citizen Kane");
      expect(response.body.year).toBe("1941");
      expect(response.body.color).toBe(false);
      expect(response.body.duration).toBe(120);
    });
    it("We do not own that movie", async () => {
        const response = await request(app).get("/api/movies/4");
        expect(response.statusCode).toBe(404);
      });
    });