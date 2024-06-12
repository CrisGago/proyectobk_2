//productController.js

import ProductService from "../services/productService.js";

export default class ProductController{
    constructor() {
        this.productService = new ProductService();
    }


    async createProduct(req, res, next) {
        try {
            const result = await this.productService.createProduct(req.body);
            return result;
            } catch (error) {
            console.error(error.message);
            throw new Error('Error al crear el producto');
        }
    };
};
