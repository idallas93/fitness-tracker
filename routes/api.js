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
    
});

// add workouts 
router.post("/api/workouts", (req, res) => {

});

// edit workouts
router.put("/api/workouts", (req, res) => {
    
});


// delete workouts
router.delete("/api/workouts", (req, res) => {
    
});

module.exports = router;

