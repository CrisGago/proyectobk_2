//mockRoutes
import { Router } from "express";
import { getMockProducts } from "../controllers/mockController.js";
import { generateMockProducts } from "../utils/mockingUtils.js";
import { generateMockProduct } from "../utils/mockingUtils.js";
 

const router = Router();


router.get('/', (req, res) =>{
    const products = [];
    for (let i = 0; i < 50; i++) {
        products.push(getMockProducts());
    }
    res.send({
        status: 'success',
        payload: products 
    })
});

router.get('/mockingproducts', (req, res) =>{
    const products = [];
    for (let i = 0; i < 50; i++) {
        products.push( generateMockProduct());
    }
    res.send({
        status: 'success',
        payload: products 
    })
});

export default router;
