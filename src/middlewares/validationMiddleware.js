import errorDictionary from '../utils/errorDictionary.js';

export default (req, res, next) => {
    const { title, price } = req.body;
    if (!title || typeof title !== 'string' || !price || typeof price !== 'number') {
        const error = errorDictionary.PRODUCT_VALIDATION_ERROR;
        error.details = {
            title: typeof title,
            price: typeof price
        };
        return next(error);
    }
    next();
};

