import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.mjs";
// Configure chai
chai.use(chaiHttp);
chai.should();
describe("Students", () => {
  describe("GET /", () => {
    // Test to get all students record
    it("should get all quotes", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
  describe("POST /", () => {
    // Test to get all students record
    it("empty quote should return an error", (done) => {
      chai
        .request(app)
        .post("/post")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "", quote: "hi" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("empty author should return an error", (done) => {
      chai
        .request(app)
        .post("/post")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("should add a new quote", (done) => {
      chai
        .request(app)
        .post("/post")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "hi" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("PUT /", () => {
    // Test to get all students record
    it("empty quote should return an error", (done) => {
      chai
        .request(app)
        .put("/put")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "", quote: "hi" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("empty author should return an error", (done) => {
      chai
        .request(app)
        .put("/put")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("should add a new quote", (done) => {
      chai
        .request(app)
        .post("/post")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "hi" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });

  describe("DELETE /", () => {
    // Test to get all students record
    it("last quote should be deleted", (done) => {
      chai
        .request(app)
        .delete("/delete")
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
  });
});
