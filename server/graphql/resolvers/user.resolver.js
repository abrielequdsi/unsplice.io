const User = require('../../models/user.model');
const Program = require('../../models/program.model');

// TODO: Implement Bcrypt
// TODO: Implement JWT

module.exports = {
    Query: {
        getClassmates: async (_, { programCode }) => {
            // fetch classmates
            const classmates = await User.find({ programCodes: programCode })
            return classmates
        }
    },
    Mutation: {
        login: async (_, { email, password }, context, info) => {

            // Handle user data
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error("User not found")
            }
            if (password != user.password) {
                throw new Error("Wrong credentials")
            }
            // Handle program data
            const programInfo = await Program.find({
                programCode: {
                    $in: user.programCodes
                }
            })

            // Return User Info
            return {
                userInfo: user,
                userProgram: programInfo
            }
        }
    }
}