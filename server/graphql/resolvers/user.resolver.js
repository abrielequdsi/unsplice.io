const User = require('../../models/user.model');
const Program = require('../../models/program.model');
// Gql
const { UserInputError } = require('apollo-server');
// Auth & Session
const { SECRET_KEY } = require('../../config.js');
const { validateLoginInput } = require('../../utils/validators')
const jwt = require('jsonwebtoken');
// TODO: Implement Bcrypt

// Jwt Helper function
function generateToken(user, userPrograms) {
    return jwt.sign({

        userInfo: user,
        userPrograms: userPrograms

    }, SECRET_KEY, { expiresIn: '1h' });
}


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

            // Validate user data
            const { errors, valid } = validateLoginInput(email, password);
            if (!valid) {
                // throw new Error({ errors })
                throw new UserInputError('Input Error', { errors: errors })
            }

            // Handle user data
            const user = await User.findOne({ email });

            // Handle username
            if (!user) {
                // throw new Error("User not found")
                errors.general = "User not found";
                throw new UserInputError('User not found', { errors: errors })
            }

            // Handle password
            if (password != user.password) {
                // throw new Error("Wrong credentials")
                errors.general = "Wrong credentials";
                throw new UserInputError('Wrong credentials', { errors: errors })
            }


            // Handle program data
            const userPrograms = await Program.find({
                programCode: {
                    $in: user.programCodes
                }
            })

            // jwt
            const token = generateToken(user, userPrograms)

            // Return User Info
            return {
                userInfo: user,
                userPrograms: userPrograms,
                token: token
            }
        }
    }
}