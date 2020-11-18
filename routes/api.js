const router = require("express").Router();
const Workout = require("../models/workout.js")

// view all workouts
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// view range of workouts
router.get("/api/workouts", (req, res) => {
    Workout.find({}).limit(5)
        .then(dbWorkouts => {
            console.log(dbWorkouts)
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        }); 
});

// add workouts 
router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// edit workouts
router.put("/api/workouts", (req, res) => {
    Workout.findByIdAndUpdate(
        params.id,
    { $push: {exercise: body}},
    {new: true, runValidators: true}
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});


// delete workouts
router.delete("/api/workouts", (req, res) => {
    
});

module.exports = router;

