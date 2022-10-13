import { Router } from "express";
import { deleteProduct, getOneProduct, getProduct, postProduct, updateProduct } from "../controllers/products.controllers.js"


const router = Router();

router.get('/products', getProduct);
router.get('/products/:id', getOneProduct);
router.post('/products', postProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;