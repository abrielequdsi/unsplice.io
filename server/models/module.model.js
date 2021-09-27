const { model, Schema } = require('mongoose');

const contentSchema = {
    number: Number,
    title: String,
    desc: String,
    completed: Boolean,
    notionContent: {
        title: String,
        link: String
    },
    ideContent: {
        title: String,
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
}



const moduleSchema = new Schema({
    name: String,
    moduleCode: String,
    desc: String,
    progress: Number,
    contents: [contentSchema],
    createdAt: String
})

module.exports = model('Module', moduleSchema);
