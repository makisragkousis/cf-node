const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static("files"));

const logger = (req, res, next) => {
  let url = req.url;
  console.log("Logger: ", url);
  let time = new Date();
  console.log("Date: ", time);

  next();
};

app.post("/user", logger, (req, res) => {
  console.log(req.body);
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;

  res.send("Post Request " + firstname + ", " + lastname + ", " + email);
});

app.listen(3000, () => {
  console.log("Server is running");
});
