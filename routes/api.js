const router = require("express").Router();
const Workout = require("../models/workout.js");

// view all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// view range of workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .limit(5)
    .then((dbWorkouts) => {
    //   console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

// add workouts
router.post("/api/workouts/", (req, res) => {
  Workout.create({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
      console.log("test", dbWorkouts)
    })
    .catch((err) => {
      res.json(err);
    
    });
});

// edit workouts
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercise: req.body } },
    { new: true, runValidators: true }
  )
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
      console.log("test")
    })
    .catch((err) => {
      res.json(err);
    });
});

// delete workouts
router.delete("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndDelete(req.body.id)
    .then(() => {
        res.json(true);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;
