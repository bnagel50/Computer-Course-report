const { Schema, model} = require ('mongoose');

const reviewSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    instructors: {
        type: Number,
        required: true
    },
    curriculum: {
        type: Number,
        required: true,
    },
    jobAssistance: {
        type: Number,
        required: true,
    },
    employment: {
        type: String,
        required: true,
    },
    commentBody: {
        type: String,
        required: true,
    },

});

module.exports = reviewSchema;