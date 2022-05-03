// requiring the package
const express = require("express");

// makeing the pkg functions and methods available on the app variable:
const app = express();
// makes the app use the public folder as storage for statis files (images/html/css/...)
app.use(express.static("public"));

app.get("/home", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/contact", (req, res, next) => {
  console.log(req);
  res.sendFile(__dirname + "/public/views/contact.html");
});

app.listen(3000, () => console.log("Server running on port 3000"));
