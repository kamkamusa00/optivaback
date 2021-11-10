import express from "express";
import cors from "cors";
import { graphicCards } from "./mocks/graphic-cards.mock";

const app = express();
app.use(express.json(),cors());

const port = 2020;

app.get("/", (req, res) => {
  res.send("api test!");
});

app.get("/graphics-cards", (req, res) => {
  setTimeout(() => {
    res.send(graphicCards());
  }, 5000);
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
