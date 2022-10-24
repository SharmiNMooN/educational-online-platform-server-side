const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5005;

app.use(cors());

app.get("/", (req, res) => {
  res.send("course API Running");
});

app.listen(port, () => {
  console.log("Sikkhayon academy Server running on port", port);
});
