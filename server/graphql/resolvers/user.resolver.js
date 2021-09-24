const User = require('../../models/user.model');

module.exports = {
    Query : {
        getClassmates: async (_, { programCode }) => {
            // fetch classmates
            const classmates = await User.find({ program: programCode })
            return classmates

        }
    },
    Mutation: {
        login: async (_, { email, password }, context, info) => {
            // Validate user data

            const user = await User.findOne({ email });

            // Handle username
            if (!user) {
                throw new Error("User not found")
            }

            // Handle password
            if (password != user.password) {
                throw new Error("Wrong credentials")
            }
            // Return User Info
            return user
        }
    }
}