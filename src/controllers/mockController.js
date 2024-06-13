//mockController.js

import { generateMockProducts } from "../utils/mockingUtils.js";
import ProductService from "../services/productService.js";

const productService = new ProductService();

export const getMockProducts = async (req, res, next) => {
    try {
        const products = generateMockProducts();
        const results = await productService.createProducts(products); 
        res.json({
            status: 'success',
            payload: results
        });
    } catch (error) {
        console.log("No se pudieron crear productos:", error);
        next(error);
    }
};
