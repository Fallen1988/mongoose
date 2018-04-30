const mongoose = require('mongoose');
const User = require('./src/db/user/schema');
const Question = require('./src/db/question/schema');
const Answer = require('./src/db/answer/schema');
const Vote = require('./src/db/vote/schema');

mongoose.connect('mongodb://localhost:3001/mongoose-test')
    .then(() => console.log('Connection established'))
    .catch( error => console.error(`ERROR: ${error}`));

//---------------------Create two Users---------------------
const alex = new User({
    email: 'asdasdasd@ukr.net',
    profile: {
        fullName: 'Aleks and',
    }
});
alex.save();


const john = new User({
    email: ' john@ukr.net',
    profile: {
        fullName: 'John and',
    }
});
john.save();

//---------------------create questions---------------------
const johnQuestion = new Question({
    title: '..........',
    description: '..........',
    createdById: john._id,
});
johnQuestion.save();
const johnQuestion2 = new Question({
    title: '..........2',
    description: '..........2',
    createdById: john._id,
});
johnQuestion2.save();

const alexQuestion = new Question({
    title: 'hello',
    description: 'test',
    createdById: alex._id,
});
alexQuestion.save(error => {
    if(!error) {
        Question.find({createdById: john._id})
            .populate('createdById')
            .exec((error, question) => {
                console.log('JOHN QUESTIONS:' + JSON.stringify(question, null, '\t'))
            })
    }
});

//---------------------create answer---------------------
const alexAnswer = new Answer({
    title: 'Alex Answer',
    description: 'qqqqqqqqqqqqqqqq',
    questionId: johnQuestion._id,
    createdById: alex._id,
});

alexAnswer.save(function (error) {
    if(!error){
        Answer.findOne({title: 'Alex Answer'})
            .populate('createdById')
            .populate('questionId')
            .exec(function (err, answer) {
                console.log('ANSWER BY TITLE:' + JSON.stringify(answer, null, '\t'))
            });
    }
});

//---------------------create Vote---------------------
const alexVote = new Vote({
    isPositive: true,
    answerId: alexAnswer._id,
    createdById: john
});

alexVote.save(function (error) {
    if(!error){
        Vote.find({})
            .populate('createdById')
            .populate('answerId')
            .exec(function (err, vote) {
                console.log('ALL VOTES:' + JSON.stringify(vote, null, '\t'))
            });
    }
});