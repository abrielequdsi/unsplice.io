const User = require('../../models/user.model');
const Program = require('../../models/program.model');
// Gql
const { UserInputError } = require('apollo-server');
// Auth & Session
const { SECRET_KEY } = require('../../config.js');
const { validateLoginInput, validateRegisterInput } = require('../../utils/validators')
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

            // Handle userprogramCodes
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
        },
        createUser: async (_, args, context, info) => {
            const { email, password, confirmPassword, firstprogramCodes, lastprogramCodes, institution, role, programCode, picture } = args.registerInput;
            const { github, linkedin, instagram, website } = args.registerInput.socialLinks;

            // Validate user data
            const { errors, valid } = validateRegisterInput(email, password, confirmPassword);
            if (!valid) {
                throw new UserInputError('Input Error', { errors: errors })
            }

            // Make sure email doesn't already exist
            const user = await User.findOne({ email });
            if (user) {
                throw new UserInputError('Email is taken', {
                    errors: {
                        userprogramCodes: 'This email is taken'
                    }
                })
            }

            // Create user 
            const newUser = new User({
                email,
                password,
                firstprogramCodes,
                lastprogramCodes,
                institution,
                role,
                picture,
                socialLinks: {
                    instagram,
                    github,
                    linkedin,
                    website,
                },
                programCodes: [programCode],
                createdAt: new Date().toISOString()
            });
            const res = await newUser.save();

            // Return User Info
            return res
        },
        swapProgram: async (_, { userId, swapIndex }) => {
            let swappedIndex = "programCodes." + swapIndex.toString()
            console.log(swappedIndex)

            const user = await User.findById(userId)
            const programCodes = user.programCodes
            console.log(programCodes)
            // [programCodes[0], programCodes[swapIndex]] = [programCodes[swapIndex], programCodes[0]]
            let b = programCodes[0];
            programCodes[0] = programCodes[swapIndex];
            programCodes[swapIndex] = b;

            console.log(programCodes)

            const userSwapProgram = await User.findOneAndUpdate({ _id: userId }, {
                programCodes
            });

            return userSwapProgram
        }
    }
}