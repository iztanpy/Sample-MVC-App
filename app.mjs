import QuoteController from "../controllers/QuoteController.mjs";

import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", QuoteController.getAllQuotes);

app.post("/post", QuoteController.addQuote);

app.put("/put", QuoteController.addQuote);

app.delete("/delete", QuoteController.deleteLastQuote);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
