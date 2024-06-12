import express from 'express';
import ProductController from '../controllers/productController.js';
import { uploader } from '../utils/multerUtil.js';
import validationMiddleware from '../middlewares/validationMiddleware.js';
import { generateMockProducts } from '../utils/mockingUtils.js';

const router = express.Router();
const products = new ProductController();

router.post('/mockingproducts', uploader.array('thumbnails', 3), async (req, res, next) => {
    if (req.files) {
        req.body.thumbnails = req.files.map(file => file.filename);
    }

    try {
        const result = await products.createProduct(req.body);
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        next(error); // Usar next para manejar el error
    }
});

router.get('/mockingproducts', (req, res, next) => {
    try {
        const products = generateMockProducts(50);
        res.send({
            status: 'success',
            payload: products
        });
    } catch (error) {
        next(error); // Usar next para manejar el error
    }
});

export default router;

