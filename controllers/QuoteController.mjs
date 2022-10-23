import quotes from "../dummy/quotes.mjs";
import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

class QuoteController {
  // Get all students
  static getAllQuotes(req, res) {
    res.send(
      quotes
        .map(
          (product) =>
            `<h1>${product.quote}</h1><br>
                <h5>${product.author}</h5>
                `
        )
        .join("")
    );
  }

  static addQuote(req, res) {
    var quote = String(req.body.quote);
    var author = String(req.body.author);
    if (author == undefined || author == "") {
      return res.status(404).json({
        message: "No author",
      });
    }

    if (quote == undefined || quote == "") {
      return res.status(404).json({
        message: "No quote",
      });
    }

    var obj = { quote: quote, author: author };
    quotes.push(obj);
    res.status(200).json({
      message: "Added a quote",
    });
    res.send();
  }

  static deleteLastQuote(req, res) {
    if (quotes.length == 0) {
      return res.status(404).json({
        message: "No more quotes to delete",
      });
    }
    quotes.pop();
    res.sendStatus(204);
  }
}
export default QuoteController;
