//mockController.js

import { generateMockProducts } from "../utils/mockingUtils.js";

export const getMockProducts = (req, res, next) => {
    try {
        const products = generateMockProducts();
        res.json({
            status: 'success',
            payload: products
        });
    } catch (error){
        console.log("No se puedo crear produtos")
    }
};
