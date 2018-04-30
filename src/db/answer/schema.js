const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    description: String,
    title: {type: String, required: true, minlength: 3},
    questionId: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
    createdAt: {type: Date, default: new Date()},
    createdById: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Answer", AnswerSchema);