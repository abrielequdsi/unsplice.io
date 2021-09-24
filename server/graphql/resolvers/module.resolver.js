const Module = require('../../models/module.model')
const Program = require('../../models/program.model');

module.exports = {
    Query: {
        getModuleList: async (_, { programId }) => {
            const program = await Program.findById(programId); // ["cs1", "cs2", "cs3"]

            // Find list of modules
            // where code: 
            const modules = await Module.find({ 
                moduleCode: {
                    $in: program.moduleCodes
                }
            })

            return modules
        },
    }
}