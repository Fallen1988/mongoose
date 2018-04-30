const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    isPositive: {type: Boolean, required: true},
    createdAt: {type: Date, default: new Date()},
    answerId: {type: mongoose.Schema.Types.ObjectId, ref: 'Answer'},
    createdById: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model("Vote", VoteSchema);