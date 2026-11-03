import express from "express";
import { greet } from "./utils.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("My endpoint");
  res.send("hello world");
});

app.get("/greetings", (req, res) => {
  const message = greet("1234");
  res.send(message);
});

app.listen(port, () => {
  return console.log("Server is up: ", port);
});
