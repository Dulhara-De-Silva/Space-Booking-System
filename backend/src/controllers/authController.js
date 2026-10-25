const { signupUser, signinUser } = require("../services/authService");

async function signup(req, res, next) {
    try {
        const { fullName, email, password } = req.body;

        const user = await signupUser(fullName, email, password);

        return res.status(201).json({
            message: "User registered successfully",
            user
        });
    } catch (error) {
        next(error);
    }
}

// Sign in an existing user
async function signin(req, res, next) {
    try {
        const { email, password } = req.body;

        if (
            typeof email !== "string" ||
            typeof password !== "string" ||
            !email.trim() ||
            !password
        ) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        const user = await signinUser(email, password);

        return res.status(200).json({
            message: "Sign in successful",
            user
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    signup,
    signin
};

