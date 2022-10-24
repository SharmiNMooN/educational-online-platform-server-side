const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5005;

app.use(cors());

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.get("/", (req, res) => {
  res.send("course API Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/category-wise-course/:id", (req, res) => {
  const id = req.params.id;

  const category_course = courses.filter((course) => course.category_id === id);
  res.send(category_course);
});

app.listen(port, () => {
  console.log("Sikkhayon academy Server running on port", port);
});
