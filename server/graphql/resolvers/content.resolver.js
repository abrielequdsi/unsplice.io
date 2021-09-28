const Module = require('../../models/module.model')

module.exports = {
    Query: {
        getContent: async (_, { moduleId, contentId }) => {
            const module = await Module.findById(moduleId)
            const content = module.contents.find(content => content.id === contentId)
            return content
        }
    },
    Mutation: {
        createContent: async (_, { contentInput: { moduleId, number, title, desc, notionContent } }) => {
            // TODO: Validate user Input

            console.log(moduleId)

            // create module
            const newContent = {
                number,
                title,
                desc,
                completed: false,
                notionContent,
                createdAt: new Date().toISOString()
            }


            // Update module's content array
            const updatedModule = await Module.update(
                { _id: moduleId },
                { $push: { contents: newContent } }
            );

            console.log(newContent)


            return newContent;
        }
    }
}