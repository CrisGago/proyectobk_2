//mockingUtil.js
import { fakerES as faker } from "@faker-js/faker";

export const generateMockProducts = () => {
      let numOfProducts = faker.number.int({ min: 1, max: 50 });
      let products = [];
      for (let i = 0; i < numOfProducts; i++) {
          products.push(generateMockProduct());
      }
      return products;  // Retorna un array de productos
    };

export const generateMockProduct = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        code: faker.string.uuid(),
        price: faker.commerce.price(),
        status: true,
        stock: faker.number.int({ min: 0, max: 100 }),
        category: faker.commerce.department(),
        thumbnails: [faker.image.url()]
    };
};


