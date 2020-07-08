const express = require("express");
const app = express();
const port = 3000;

app.get("/people", (req, res) =>
  res.send([
    { name: "Leo", age: 17 },
    { name: "Isabella", age: 30 },
    { name: "Michael", age: 23 },
    { name: "Sarah", age: 12 },
  ])
);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
