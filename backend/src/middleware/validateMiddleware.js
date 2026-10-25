
function validateSignup(req, res, next) {
    const { fullName, email, password, confirmPassword } = req.body;

    if (!fullName || !email || !password || !confirmPassword) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    if (typeof fullName !== "string" ||
        typeof email !== "string" ||
        typeof password !== "string" ||
        typeof confirmPassword !== "string") {
        return res.status(400).json({
            message: "Invalid input types"
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        return res.status(400).json({
            message: "Please enter a valid email address"
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters long"
        });
    }

        if (!/[A-Z]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one uppercase letter"
        });
    }

    if (!/[a-z]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one lowercase letter"
        });
    }

    if (!/[0-9]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one number"
        });
    }

    if (!/[^A-Za-z0-9\s]/.test(password)) {
        return res.status(400).json({
            message: "Password must contain at least one special character"
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match"
        });
    }

    req.body.fullName = fullName.trim();
    req.body.email = email.trim().toLowerCase();

    next();
}

module.exports = { validateSignup };
