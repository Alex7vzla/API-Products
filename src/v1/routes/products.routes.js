import { Router } from "express";
import { 
    getAllProducts,
    getProductById,
    createProduct,
    editProduct,
    deleteOneProduct
        } from "../../services/products.services.js"


const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', editProduct);
router.delete('/:id', deleteOneProduct);

export default router;