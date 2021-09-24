const Module = require('../../models/module.model')

module.exports = {
    Query: {
        getContent: async (_, { moduleId, contentId }) => {
            const module = await Module.findById(moduleId)
            const content = module.contents.find(content => content.id === contentId)
            return content
        }
    }
}