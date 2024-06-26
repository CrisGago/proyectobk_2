//CustomError  - Error personalizado
export default class CustomError {
    static createError({ name = "Error", cause, message, code = 1 }) {
        const error = new Error(message);
        if (cause) {
            error.cause = cause;
        }
        error.name = name;
        error.code = code;
        throw error;
    }
};
