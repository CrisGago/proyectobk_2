import ProductRepository from "../repositories/productRepository.js";

export default class ProductService {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    async createProduct(product) {
        try {
            const result = await this.productRepository.create(product);
            return result;
        } catch (error) {
            console.error(error.message);
            throw new Error('Error al crear el producto');
        }
    }

    async createProducts(products) {
        try {
            const results = await Promise.all(products.map(product => this.createProduct(product)));
            return results;
        } catch (error) {
            console.error(error.message);
            throw new Error('Error al crear los productos');
        }
    }
};
