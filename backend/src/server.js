require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { initializeDatabase } = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json({ limit: "10kb" }));

// API routes
app.use("/api/auth", authRoutes);

// Error handling middleware (must come after routes)
app.use(errorMiddleware);

// Start the server after initializing the database
async function startServer() {
    try {
        await initializeDatabase();

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Trace Spaces backend running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
}

startServer();
