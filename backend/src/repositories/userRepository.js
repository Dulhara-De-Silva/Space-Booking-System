const { getConnection } = require("../config/database");

async function findByEmail(email) {
    const connection = getConnection();

    const [rows] = await connection.execute(
        "SELECT id, role FROM users WHERE email = ?",
        [email]
    );

    return rows[0] || null;
}

async function createUser(fullName, email, hashedPassword) {
    const connection = getConnection();

    const [result] = await connection.execute(
        `INSERT INTO users (full_name, email, password, role)
         VALUES (?, ?, ?, ?)`,
        [fullName, email, hashedPassword, "user"]
    );

    return result.insertId;
}

module.exports = { findByEmail, createUser };