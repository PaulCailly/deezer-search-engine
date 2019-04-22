import request from "supertest";
import app from "./index";

describe("GET /", function() {
  it("respond with 404", function(done) {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(404, done);
  });
});

describe("GET /track/:query", function() {
  it("respond with json containing a list of results", function(done) {
    request(app)
      .get("/track/pnl&index=0")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
