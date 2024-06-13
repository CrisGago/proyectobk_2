//app.js
import express from "express";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import mongoose from "mongoose";
import mongosePaginate from "mongoose-paginate-v2";
import websocket from "../websocket.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
                                                

import bodyParser from "body-parser";
import productRoutes from "../src/routes/productRoutes.js";
import mockRoutes from "../src/routes/mockRoutes.js";
import errorHandler from "../src/middlewares/errorHandler.js";



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(bodyParser.json());
app.use('/', productRoutes);
app.use('/api/products', productRoutes);
app.use('/api', mockRoutes);
app.use('/api/monckingproducts', mockRoutes);
app.use('/monckingproducts', mockRoutes);
app.use(errorHandler);

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
