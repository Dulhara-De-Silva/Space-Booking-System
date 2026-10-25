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

async function signinUser(email, password) {
    const user = await userRepository.findByEmail(
        email.trim().toLowerCase()
    );

    if (!user) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.password
    );

    if (!passwordMatches) {
        const error = new Error("Invalid email or password");
        error.statusCode = 401;
        throw error;
    }

    return {
        userId: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role
    };
}

module.exports = { signupUser, signinUser };