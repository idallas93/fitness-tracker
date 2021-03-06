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
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes 
app.use(require("./routes/api.js"))
app.use(require("./routes/html.js"))

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});