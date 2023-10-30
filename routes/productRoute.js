import express from 'express';
import {getProducts, getProduct, createProduct, updateProduct, deleteProduct} from '../controllers/productController.js';
const router=express.Router();

router.get('/',getProducts);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.post('/',createProduct);

// delete a product
router.delete('/:id', deleteProduct);

export default router;
