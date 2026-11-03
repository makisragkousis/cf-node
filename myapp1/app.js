const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log("Main page");
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  console.log("About page");
  res.send("This is about page");
});

app.get("/help", (req, res) => {
  console.log("Help Page");
  res.send("This is help page");
});

app.get("/user", (req, res) => {
  let query = req.query;
  console.log("Query >>>", query);
  let name = query.name;
  let surname = query.surname;
  res.send("User page: " + name + ", " + surname);
});

app.get("/user/:name/:surname", (req, res) => {
  let query = req.params;
  console.log("Path >>>", query);
  let name = query.name;
  let surname = query.surname;
  res.send("User page: " + name + ", " + surname);
});

app.listen(port, () => {
  console.log("Server is up");
});
