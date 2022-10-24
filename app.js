const QuoteController = require("./controllers/QuoteController.js");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.get("/", QuoteController.getAllQuotes);

app.post("/post", QuoteController.addQuote);

app.put("/put", QuoteController.addQuote);

app.delete("/delete", QuoteController.deleteLastQuote);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
