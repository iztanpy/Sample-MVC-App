const quotes = require("../dummy/quotes.js");

class QuoteController {
  // Get all students
  static getAllQuotes(req, res) {
    res.send(quotes);
  }

  static addQuote(req, res) {
    var quote = String(req.body.quote).trim();
    var author = String(req.body.author).trim();
    var id = quotes.length + 1;
    if (author == "") {
      return res.status(404).json({
        message: "No author",
      });
    }

    if (quote == "") {
      return res.status(404).json({
        message: "No quote",
      });
    }

    var obj = { id: id, quote: quote, author: author };
    quotes.push(obj);
    res.status(200).json({
      message: "Added a quote",
    });
    res.send();
  }

  static editQuote(req, res) {
    var quote = String(req.body.quote).trim();
    var author = String(req.body.author).trim();
    var id = String(req.body.id).trim();
    console.log(quotes);
    if (author == "") {
      return res.status(404).json({
        message: "No author",
      });
    }

    if (quote == "") {
      return res.status(404).json({
        message: "No quote",
      });
    }

    if (id == "") {
      return res.status(404).json({
        message: "No id",
      });
    }
    if (id > quotes.length || id <= 0) {
      return res.status(404).json({
        message: "Invalid id",
      });
    }
    quotes[id - 1] = { id: id, quote: quote, author: author };
    res.status(200).json({
      message: "Editted a quote",
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
module.exports = QuoteController;
