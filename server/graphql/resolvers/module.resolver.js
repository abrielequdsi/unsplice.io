const Module = require('../../models/module.model')
const Program = require('../../models/program.model');

module.exports = {
    Query: {
        getModuleList: async (_, { programId }) => {
            const program = await Program.findById(programId); // ["cs1", "cs2", "cs3"]

            // Find module where code is ["cs1", "cs2", "cs3"]
            const modules = await Module.find({ 
                moduleCode: {
                    $in: program.moduleCodes
                }
            })

            return modules
        },
        getModule: async (_, { moduleId }) => {
            const module = await Module.findById(moduleId);
            return module
        }
    }
}