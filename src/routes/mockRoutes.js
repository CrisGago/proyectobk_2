import express from 'express';
import { Router } from "express";
import { getMockProducts } from "../controllers/mockController.js";


const router = Router();


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
