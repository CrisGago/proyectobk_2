import ProductRepository from "../repositories/productRepository.js";


export default class productService {

    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(product) {
        try {
            const result = await this.productRepository.createProduct(product);
            return result;
        } catch (error) {
            console.error(error.message);
            throw new Error('Error al crear el producto');
        }
    }
};