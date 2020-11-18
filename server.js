// npm requirements
const express = require("express");
const mongoose = require("mongoose")

// set up port
const PORT = 3000;

const app = express();

// use express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// set up mongoose for mongo db
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes 
app.use(require("./routes/api.js"))
app.use(require("./routes/view.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });