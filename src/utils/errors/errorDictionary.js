//errorDictionary

export const generateProductErrorInfo = (product) => {
    const { title, description, code, price, stock, category } = product;
    return `Uno o mas propiedades estan incompletas o no son validas.
    Lista de propiedades:
    * title: needs to be a String, received ${product.title}
    * description: needs to be a String, received ${product.description}
    * code: needs to be a String, received ${product.code}
    * price: needs to be a Number, received ${product.price}
    * stock: needs to be a Number, received ${product.stock}
    * category: needs to be a String, received ${product.category}`;
};

