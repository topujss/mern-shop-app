import { Router } from 'express';
import {
  createProductBrand,
  deleteProductBrand,
  editProductBrand,
  getAllProductBrand,
  getSingleProductBrand,
  statusUpdate,
} from '../controllers/productBrand.js';
import { brandMulter } from '../utils/multer.js';

// create brand router
const router = Router();

/**
 * @link /brand
 * get category route using params slug
 */
router.route('/brand').get(getAllProductBrand).post(brandMulter, createProductBrand);

/**
 * @param id
 * get, put and delete brand route using params id
 */
router.route('/brand/:id').get(getSingleProductBrand).put(editProductBrand).delete(deleteProductBrand);

router.patch('/brand-status/:id', statusUpdate);
export default router;
