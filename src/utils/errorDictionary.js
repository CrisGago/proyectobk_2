const errorDictionary = {
    PRODUCT_VALIDATION_ERROR: {
        message: 'Validation error: Missing required fields',
        code: 400,
        requiredFields: {
            title: 'string',
            price: 'number'
        }
    }
};

export default errorDictionary;
