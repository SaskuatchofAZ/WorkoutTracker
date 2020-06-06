const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Workout type must be resistance or cardio."
    },

    name: {
        type: String,
        trim: true,
        required: "Workout name is required."
    },

    duration: {
        type: Number,
        required: "Workout duration is required."
    },

    weight: {
        type: Number
    },

    reps: {
        type: Number
    },

    sets: {
        type: Number
    },

    distance: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;