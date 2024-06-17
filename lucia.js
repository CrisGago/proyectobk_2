//Lucia Nerea

//Cris, te estas enredando, no debemos guardar esos productos en la bbdd, fijate que es modo test, si no vamos a llenar la bbdd de productos de prueba, simplemente es mostrarlos en postam correctamente con la estructura similar a lo que si tenes guardado 

//1-en algun archivo en tu codigo, generalemnte lo mandamos en utils (donde tenemos funciones auxiliares), importas facker y haces la funcion que genera los productos 


import { fakerES as faker } from "@faker-js/faker";


export const generateProduct = () => {

 return {

  _id: faker.database.mongodbObjectId(),
  title: faker.commerce.productName(),
  description: faker.commerce.productAdjective(),
  price: faker.commerce.price(),
  thumbnails: [faker.image.url()],
  code: faker.string.alphanumeric(6),
  stock: +faker.string.numeric(1),
  category: faker.commerce.productMaterial(),

 };

};


//luego en tu controlador haces el mock propiamente dicho

import { generateProduct } from "../utils/mockingGenerate.js";


export const mockingProducts = async (req, res) => {

 let products = [];

 for (let i = 0; i < 100; i++) {

  products.push(generateProduct());

 }

 res.send({ status: "success", payload: products });

};

// y luego en tus rutas

import { Router } from "express";

import { mockingProducts } from "../controllers/mockingController.js";


const router = Router();


router.get("/mockingproducts", mockingProducts);


export default router;

//y finalmente en tu app.js

//llamas al router 

app.use("/api/mocking", mockingRouter);

//Ahora si realmente quisieras guardar esos productos en la bbdd :


import { generateProduct } from'../utils/mockingGenerate.js';

import Product from '../models/Product.js'; // aca importas el modelo!!! 

exportconstmockingProducts = async (req, res) => {

 let products = [];

 for (let i = 0; i < 100; i++) {

 products.push(generateProduct());

 } 

try { // Guarda los productos en la base de datos

awaitProduct.insertMany(products);

res.send({ status: 'success', payload: products }); 

} catch (error) { res.status(500).send({ status: 'error', message: error.message }); 

} 

};



//simplemente eso, ustede manejelo como quiera pero si quisieras guardar en labbd, ese seria el paso adicional!


