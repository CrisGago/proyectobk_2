import { generateMockProducts } from '../utils/mockingUtils.js';

export const getMockProducts = (req, res, next) => {
    try {
        const products = generateMockProducts();
        res.json(products);
    } catch (error) {
        next(error);
    }
};
