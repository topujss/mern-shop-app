import { Router } from 'express';
import { createProductBrand, deleteProductBrand, editProductBrand, getAllProductBrand, getSingleProductBrand } from '../controllers/productBrand.js';
import { brandMulter } from '../utils/multer.js';

// create brand router
const router = Router();

/**
 * @link /brand
 * get category route using params slug
 */
router.route('/brand').get(getAllProductBrand).post( brandMulter, createProductBrand);

/**
 * @param slug
 * get brand route using params slug
 */
router.route('/brand/:slug').get(getSingleProductBrand);

/**
 * @param id
 * put and delete brand route using params id
 */
router.route('/brand/:id').put(editProductBrand).delete(deleteProductBrand);
export default router;
