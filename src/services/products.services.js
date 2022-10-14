import { 
    getProduct,
    getOneProduct,
    postProduct,
    updateProduct,
    deleteProduct
    } from '../controllers/products.controllers.js'

export const getAllProducts = (req, res) => {
    getProduct()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(500).json({message: err.message});
        });
};

export const getProductById = (req, res) => {
    
    const id = req.params.id;
    getOneProduct(id)
        .then(data => {
          if(data){
            res.status(200).json(data)
          }else {
            res.status(404).json({message: 'Invalid ID'})
          }
        })
        .catch((err) => {
            res.status(404).json({message: err.message});
        })
};

export const createProduct = (req, res) => {
    const data = req.body;
    if (data.name && data.category && data.price && data.is_available){
        postProduct(data)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else {
        res.status(400).json({message : 'Missing data'})
    }
};

export const editProduct = (req, res) => {
    const id = req.body.id
    const data = req.body;
    updateProduct(id, data)        
        .then((data) => {
        res.status(200).json(data)
        })
        .catch((error) => {
        res.status(500).json({message: error.message})
        })
};

export const deleteOneProduct = (req, res) => {
    const id = req.params.id
    deleteProduct(id)
        .then((response) => {
            if(response){
                res.status(204).json({message: 'Deleting successfully'})
            }else{
                res.status(400).json({message: 'Invalid ID'})
            }
        })
        .catch(err=> {
            res.status(400).json(err)
        })
};