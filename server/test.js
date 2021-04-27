const supertest = require("supertest");
const os = require("os");
const should = require("should");

const server = supertest.agent(
  os.platform() === "win32" ? "http://localhost:3002" : "http://localhost:3002"
);

describe("/compute", () => {
  it("it should return response", (done) => {
    server
      .get("/compute")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .end((err, res) => {
        if (err) return done(err);
        res.status.should.equal(200);

        done();
      });
  });

  it("it should return an number", (done) => {
    server
      .post("/compute")
      .send({ fist_number: 3, second_number: 4 })
      .expect(200)
      .end((err, res) => {
        if (err) done(err);
        res.body.should.have.property("result");
        res.status.should.equal(200);

        done();
      });
  });
});
