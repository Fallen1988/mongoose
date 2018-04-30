const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 3},
    description: String,
    tags: [String],
    createdAt: {type: Date, default: new Date()},
    createdById: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Question", QuestionSchema);