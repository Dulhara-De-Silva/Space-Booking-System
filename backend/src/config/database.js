const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');

const dbConfig = {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || ""
};

let connection;

async function initializeDatabase() {
    connection = await mysql.createConnection(dbConfig);

    await connection.query(`CREATE DATABASE IF NOT EXISTS trace_spaces`);

    await connection.query(`USE trace_spaces`);

    await connection.query(`
        CREATE table IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            full_name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(100) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`
    );

     // Create the initial admin account if it doesn't exist.
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        throw new Error(
            "ADMIN_EMAIL and ADMIN_PASSWORD must be configured in .env"
        );
    }

    const [existingAdmin] = await connection.execute(
        `SELECT id FROM users WHERE email = ?`,
        [adminEmail.trim().toLowerCase()]
    );

    if (existingAdmin.length === 0) {
        const hashedPassword = await bcrypt.hash(adminPassword, 12);

        await connection.execute(
            `INSERT INTO users (full_name, email, password, role)
             VALUES (?, ?, ?, ?)`,
            [
                "Administrator",
                adminEmail.trim().toLowerCase(),
                hashedPassword,
                "admin"
            ]
        );

        console.log("Initial admin account created");
    } else {
        console.log("Initial admin account already exists");
    }

    console.log("Database and user table are ready");

    return connection;
}

function getConnection() {
    if (!connection) {
        throw new Error(
            "Database is not initialized. Call initializeDatabase() first."
        );
    }

    return connection;
}

module.exports = {
    initializeDatabase, getConnection
}