function errorMiddleware(err, req, res, next) {
    console.error(err);

    if (res.headersSent) {
        return next(err);
    }

    res.status(err.statusCode || 500).json({
        message: err.statusCode
            ? err.message
            : "An unexpected server error occurred"
    });
}

module.exports = errorMiddleware;