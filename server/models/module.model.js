const { model, Schema } = require('mongoose');

const contentSchema = new Schema({
    number: Number,
    title: String,
    desc: String,
    completed: boolean,
    videoContent: {
        videoLink: String
    },
    textContent: {
        text: String
    },
    ideContent: {
        answer: String,
        question: String,
        testCase: [
            {
                input: String,
                output: String
            }
        ],
        solution: String
    },
    createdAt: String
})



const moduleSchema = new Schema({
    name: String,
    desc: String,
    progress: Number,
    contents: [contentSchema],
    createdAt: String
})

module.exports = model('Module', moduleSchema);
