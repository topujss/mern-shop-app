import { Router } from 'express';
import { createProductBrand, getAllProductBrand } from '../controllers/productBrand.js';

// create brand router
const router = Router();

/**
 * @link /brand
 * get category route using params slug
 */
router.route('/brand').get(getAllProductBrand).post(createProductBrand);

export default router;
