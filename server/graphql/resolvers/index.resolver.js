// const usersResolver = require('./user.resolver')
// const programsResolver = require('./program.resolver')
// const modulesResolver = require('./module.resolver')
const User = require('../../models/user.model')
const Program = require('../../models/program.model')
const Module = require('../../models/module.model')

const resolvers = {
    Mutation: {
        login: async (_, { username, password }, context, info) => {
            // Validate user data

            const user = await User.findOne({ username });

            // Handle username
            if (!user) {
                console.log("User not found")
            }

            // Handle password
            if (password != user.password) {
                console.log("Wrong credentials")
            }
            // Return User Info
            return user
        }
    }
}

module.exports = resolvers;