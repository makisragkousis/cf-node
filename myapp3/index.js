const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/create", (req, res) => {
  console.log("Req /create");
  res.render("form", {});
});

app.post("/user", (req, res) => {
  console.log("Req /user");
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;

  res.render("user", {
    name: firstname,
    surname: lastname,
    email: email,
  });
});

app.get("/users", (req, res) => {
  console.log("Req /users");

  const users = [
    {
      name: "name1",
      surname: "surname1",
      email: "email1",
    },
    {
      name: "name2",
      surname: "surname2",
      email: "email2",
    },
  ];

  res.render("users", { users });
});

app.listen(5000, () => {
  console.log("Server is up");
});
