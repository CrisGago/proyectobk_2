import { fakerES as faker } from "@faker-js/faker";

const generateMockProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        code: faker.commerce.productCode(),
        price: faker.commerce.price(),
        stock: faker.number.int({min: 0, max: 100}),
        category: faker.commerce.department(),
        image: faker.image.url()
    };
};

export const generateMockProducts = () => {
    let numOfProducts = faker.number.int({min: 1, max: 50});
    let products = [];
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateMockProduct());
    }
    return products;
};
