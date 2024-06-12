// errorHandler.js
export default (err, req, res, next) => {
    console.error(err);
    if (err.code) {
        res.status(err.code).json({ message: err.message, details: err.details });
    } else {
        res.status(500).json({ message: 'An unexpected error occurred', error: err.message });
    }
};
