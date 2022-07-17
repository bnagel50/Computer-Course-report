const { Schema, model, Types} = require ('mongoose');
const { ObjectId } = Types

const reviewSchema = new Schema({
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
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    courseId: {
        type: ObjectId,
        ref: 'Course'
    }
});

const Review = model('Review', reviewSchema);

module.exports = Review;