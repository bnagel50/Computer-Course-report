const { Schema, model } = require('mongoose');

const courseSchema = new Schema({
    cost: {
        type: String,
        required: [true, 'Please enter the cost of the course!']
    },
    length: {
        type: Number,
        required: [true, 'Please enter the amount of weeks the course']
    },
    avgRating: {
        type: Number,
        default: 0
    },
    location: {
        type: String,
        required: true,
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    curriculum: [
        {
        type: String,
        trim: true,
    },
],
    reviews: [
        {
            name: {
                type: Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            thoughts: {
                type: String,
                required: true,
            },
            // name:{
            //     type: String,
            //     required: true,
            // },
            // curriculum: {
            //     type: Number,
            //     required: true,
            // },
            // instructors: {
            //     type: Number,
            //     required: true
            // },
            // overallExperience:{
            //     type: Number,
            //     required: true,
            // },
            // jobAssistance: {
            //     type: Number,
            //     required: true,
            // },
            employment: {
                type: String,
                required: true,
            },
            time:{
                type: Date,
                default: Date.now()
            },
        },
    ],

});

const Course = model('Course', courseSchema);

module.exports = Course;