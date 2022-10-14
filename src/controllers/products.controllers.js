import { Product } from '../models/Products.js'

export const getProduct = async () => {
    const products = await Product.findAll();
    return products;
};

export const getOneProduct = async (id) => {
        const product = await Product.findOne({
            where: {
                id,
            },
        });
        return product;
};

export const postProduct = async (data) => {
    const newProduct = await Product.create({
        name: data.name,
        category: data.category,
        price: data.price,
        is_available: data.is_available
    });
    return newProduct;
};

export const updateProduct = async (id, data) => {

        const product = await Product.findByPk(id)
        product.name = data.name
        product.category = data.category
        product.price = data.price
        product.is_available = data.is_available

        await product.save();
        
        return product;
};

export const deleteProduct = async (id) => {
        
        const product = await Product.destroy({
            where: {
                id,
            },
        });
        return product;
};