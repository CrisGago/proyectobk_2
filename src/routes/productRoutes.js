import express from "express";
import CustomError from "../utils/errors/CustomError.js";
import { ErrorCodes } from "../utils/errors/enums.js";
import { generateProductErrorInfo } from "../utils/errors/errorDictionary.js";
import productModel from "../models/productModel.js";
import ProductController from '../controllers/productController.js';
import { uploader } from '../utils/multerUtil.js';
import { generateMockProducts } from '../utils/mockingUtils.js';


const router = express.Router();
const products = new ProductController();


router.post('/', async (req, res, next) => {
    const { title, description, code, price, stock, category, thumbnails } = req.body;

    if (!title || typeof title !== 'string' || !description || typeof description !== 'string' || !code || typeof code !== 'string' || typeof price !== 'number' || typeof stock !== 'number' || !category || typeof category !== 'string') {
        const errorInfo = generateProductErrorInfo(req.body);
        try {
            CustomError.createError({
                name: 'Product creation error',
                cause: generateProductErrorInfo({ title, description, code, price, stock, category }),
                message: 'Error trying to create Product',
                code: ErrorCodes.INVALID_TYPES_ERROR
            });
        } catch (err) {
            return next(err); // Pasa el error al middleware de manejo de errores
        }
    }
    try {
        const newProduct = new productModel({
            title,
            description,
            code,
            price,
            stock,
            category,
            thumbnails
        });

        await newProduct.save();

        res.status(201).send({
            status: 'success',
            payload: newProduct
        });
    } catch (err) {
        return next(err);
    };
});
export default router;

