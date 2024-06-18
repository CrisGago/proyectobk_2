//app.js
import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import mongoose from "mongoose";
import websocket from "../websocket.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
                                                

import bodyParser from "body-parser";
import productRoutes from "../src/routes/productRoutes.js";
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.Router.js";
import mockRoutes from "../src/routes/mockRoutes.js";




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(bodyParser.json());
app.use('/', productRoutes);
app.use('/products', productRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartsRouter);
app.use('/carts', viewsRouter);
app.use('/api', mockRoutes);
app.use('/api/monckingproducts', mockRoutes);
app.use('/monckingproducts', mockRoutes);

//Middleware
app.use((err, req, res, next) =>{
   //Log del error para debug interno  
    console.error(err);
  //Respuesta de error clase
     res.status(500).json({
        status: 'error',
        message: err.message,
        code: err.code || 500,
        cuase: err.cuase || 'causa desconocida'
    });
});

const conexion = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Conectado a la base de datos MongoDB");
    } catch (error) {
        console.log("Fallo la conexión a MongoDB:", error);
    }
};
conexion();

//----------------Esta forma de conexión la utilizaba antes del .env----------------------
// const conexion = async() =>{
//     try{
//         await mongoose.connect("mongodb+srv://crisgh:eC0der2024@cluster0.x8bucze.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0");
//         console.log("Conectando con la bbdd MongoAtlas");
//     }catch (error){
//         console.log("Fallo la conexión");
//     }
// }
// conexion();
//--------------------------------------------******---------------------------------------
//Local connection 
const PORT = 8080;
const httpServer = app.listen(PORT, () =>{
    console.log(`Start server PORT ${PORT}`);
});
//websocket
const io = new Server(httpServer);
websocket(io);
