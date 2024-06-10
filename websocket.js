import  ProductController  from "./src/controllers/productController.js";

const ProductBD = new ProductController();


export default (io) => {
    io.on("connection", (socket) =>{

        socket.on("crearProduct", async (data) =>{
            try{
                await ProductBD.createProduct(data);
                const products = await ProductBD.getAllProducts();
                io.emit("publishProducts", products);
            }catch(error) {
                socket.emit("statusError", error.message);
            }

        });

        socket.on("deleteProduct", async (data) =>{
            try{
                const result = await ProductBD.deleteProduct(data.pid);
                io.emit("publishProducts", result);
            }catch (error) {
                socket.emit("statusError", error.message);
            }
        });
  
//message

socket.on("message", async (data) =>{
    try{
        await MessageBD.addMessages(data);
        MessageBD.push({
            socketId: socket.id,
            message: data
        });
        const mesajes = await MessageBD.getMessages();
        io.emit("publishProducts", mesajes);
    }catch(error) {
        socket.emit("statusError", error.message);
    }

});

socket.on("userConnect", async (user) => {
    // Obtener todos los mensajes almacenados
    const mensajes = await MessageBD.getMessages();
    // Emitir los mensajes al usuario que se conecta
    socket.emit("messageLogs", mensajes);
    // Notificar a todos los usuarios sobre el nuevo usuario conectado
    io.emit("newUser", user);
})
});
};