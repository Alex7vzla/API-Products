import { Product } from '../models/Products.js'

export const getProduct = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);        
    } catch (error) {
        return res.status(500).json({message: error.message});
    }

};

export const getOneProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findOne({
            where: {
                id,
            },
        });
        //Filtro para corroborar existencia
        if(!product) return res.status(404).json({message: 'Product not found'});

        res.json(product);

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const postProduct = async (req, res) => {
    const { name, category, price, is_available } = req.body
try {
    const newProduct = await Product.create({
        name,
        category,
        price,
        is_available
    });
    res.json(newProduct);
} catch (error) {
    return res.status(500).json({message: error.message});
}
};

export const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, category, price, is_available} = req.body;

        const product = await Product.findByPk(id)
        product.name = name
        product.category = category
        product.price = price
        product.is_available = is_available

        await product.save();
        
        res.json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.destroy({
            where: {
                id,
            },
        });
        res.status(204).json(product);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};