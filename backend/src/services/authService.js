const bcrypt = require("bcryptjs");
const userRepository = require("../repositories/userRepository");

async function signupUser(fullName, email, password) {
    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
        const error = new Error(
            "An account with this email already exists"
        );
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const userId = await userRepository.createUser(
        fullName,
        email,
        hashedPassword
    );

    return {
        userId,
        fullName,
        email
    };
}

module.exports = { signupUser };