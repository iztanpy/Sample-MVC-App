const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app.js");
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
        .send({ author: "", quote: "hi", id: "1" })
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
        .send({ author: "me", quote: "", id: "1" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("empty id should return an error", (done) => {
      chai
        .request(app)
        .put("/put")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "1", id: "" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("invalid id should return an error", (done) => {
      chai
        .request(app)
        .put("/put")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "1", id: "100000" })
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });

    it("should edit a new quote", (done) => {
      chai
        .request(app)
        .post("/post")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ author: "me", quote: "hi", id: "1" })
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
