import { Router } from 'express';
import {
  createProductCategory,
  deleteProductCategory,
  editProductCategory,
  getAllProductCategory,
  getSingleProductCategory,
  statusUpdate,
} from '../controllers/productCategory.js';
import { categoryMulter } from '../utils/multer.js';

// create router
const router = Router();

// get and post category route
router.route('/category').get(getAllProductCategory).post(categoryMulter, createProductCategory);

/**
 * @param slug
 * get category route using params slug
 */
router.route('/category/:slug').get(getSingleProductCategory);

/**
 * @param id
 * get category route using params id
 */
router.route('/category/:id').delete(deleteProductCategory).put(editProductCategory);
router.put('/category/:id', statusUpdate);

export default router;
