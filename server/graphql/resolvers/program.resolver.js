const Program = require('../../models/program.model')

module.exports = {
    Query : {
        getProgram: async (_, { programCode }) => {
            const program = await Program.find({ programCode: programCode})
            return program
        }
    }
}