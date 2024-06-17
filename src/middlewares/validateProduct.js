import CustomError from "../utils/errors/CustomError.js";
import { ErrorCodes } from "../utils/errors/enums.js";
import { generateProductErrorInfo } from "../utils/errors/errorDictionary.js";

function validateProduct (product) {
    const { title, price } = product;
    if (typeof title !== 'string' || typeof price !== 'number') {
        const errorInfo = generateProductErrorInfo(product);
        CustomError.createError({
            name: "ProductValidationError",
            message: errorInfo,
            code: ErrorCodes.INVALID_TYPES_ERROR
        });
    }
    return true;
}

try {
    const product = { title: 123, price: "50:00"}; //Producto invalido
    validateProduct(product);
}catch (err) {
    console.error(`Error: ${err.name} - ${err.message}`);
    if (err.code) {
        console.error(`Code: ${err.code}`);
    }
    if(err.cause) {
        console.error(`Cause: ${err.cause}`);
    }
};


