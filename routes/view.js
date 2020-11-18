const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});


module.exports = router;


// The user should be able to:

//   * Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View the combined weight of multiple exercises on the `stats` page.

// To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

//   * [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

//   * [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)
