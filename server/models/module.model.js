const { model, Schema } = require('mongoose');

const contentSchema = {
    number: Number,
    title: String,
    desc: String,
    completed: Boolean,
    notionContent: String,
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
