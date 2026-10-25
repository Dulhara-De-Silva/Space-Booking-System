const { signupUser } = require("../services/authService");

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

module.exports = { signup };