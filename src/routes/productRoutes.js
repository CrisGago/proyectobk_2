import { Router } from "express";
import ProductController from "../controllers/productController.js";
import { uploader } from "../utils/multerUtil.js";
import validationMiddleware from "../middlewares/validationMiddleware.js";
import { getMockProducts } from "../controllers/mockController.js";

const router = Router();

const products = new ProductController();



router.post('/', uploader.array('thumbnails', 3), async (req, res) => {

    if (req.files) {
        req.body.thumbnails = [];
        req.files.forEach((file) => {
            req.body.thumbnails.push(file.filename);
        });
    }

    try {
        const result = await products.createProduct(req.body);
        res.send({
            status: 'success',
            payload: result
        });
    } catch (error) {
        res.status(400).send({
            status: 'error',
            message: error.message
        });
    }
});


router.get('/mockingproducts', (req, res) =>{
    const products = [];
    for (let i = 0; i < 50; i++) {
        products.push(getMockProducts());
    }
    res.send({
        status: 'success',
        payload: users 
    })
});


export default router;
