const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<h1>Demo Express App</h1><h4>Message: Success</h4> <p>Version 1.0</p>"
  );
});

app.get("/products", (req, res) => {
  res.send([
    {
      productId: "pd001",
      price: 100,
    },
    {
      productId: "pd002",
      price: 150,
    },
    {
      productId: "pd003",
      price: 100,
    },
  ]);
});
app.get("/user", (req, res) => {
  res.send([
    {
      userId: "us001",
      price: 100,
    },
    {
      userId: "us002",
      price: 150,
    },
    {
      userId: "us003",
      price: 100,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port: ${port}`);
});
