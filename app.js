const express = require("express");
const app = express();
const port = 3000;
wow = { lol: "key" };
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.set(wow);
  res.status(418);
  res.send("what this");
});

app.listen(port, () => console.log(`Example app is listening on port ${port}`));
