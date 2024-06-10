import ProductDao from "../dao/productDao.js";

class ProductRepository {
    constructor() {
        this.productDao = new ProductDao();
    }

    async create(productData) {
        return await this.productDao.create(productData);
    }

    async getAll() {
        return await this.productDao.getAll();
    }

    // Otros métodos según sea necesario
}

export default ProductRepository;
