const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var notes = [
  { quote: "me", author: "wo" },
  { quote: "Hi", author: "we" },
];

app.get("/", (req, res) => {
  res.send(
    notes
      .map(
        (product) =>
          `<h1>${product.quote}</h1><br>
        <h5>${product.author}</h5>
        `
      )
      .join("")
  );
});

app.post("/post", (req, res) => {
  console.log(req.body);
  var quote = String(req.body.quote);
  var author = String(req.body.author);
  if (author == undefined || author == "") {
    author = "Annoymous";
  }

  if (quote == undefined || quote == "") {
    quote = "I cant remember what they said...";
  }

  var obj = { quote: quote, author: author };
  notes.push(obj);
  res.send();
});

app.put("/put", (req, res) => {
  console.log(req.body);
  var quote = String(req.body.quote);
  var author = String(req.body.author);
  if (author == undefined || author == "") {
    author = "Annoymous";
  }

  if (quote == undefined || quote == "") {
    quote = "I cant remember what they said...";
  }
  var obj = { quote: quote, author: author };
  notes.push(obj);
  res.send();
});

app.delete("/delete", (req, res) => {
  notes = [
    { quote: "me", author: "wo" },
    { quote: "Hi", author: "we" },
  ];
  res.send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || port}`);
});
