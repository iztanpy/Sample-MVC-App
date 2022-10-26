const QuoteController = require("./controllers/QuoteController.js");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

const port = process.env.PORT || 3000;

app.get("/", QuoteController.getAllQuotes);

app.post("/post", QuoteController.addQuote);

app.put("/put", QuoteController.editQuote);

app.delete("/delete", QuoteController.deleteLastQuote);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
