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

/**
 * @param id
 * @route GET /category
 * @desc get all category & post category with photo
 * @access PUBLIC
 */
router.route('/category').get(getAllProductCategory).post(categoryMulter, createProductCategory);

/**
 * @param slug
 * @route GET /category/:slug
 * @desc get single category
 */
router.route('/category/:slug').get(getSingleProductCategory);

/**
 * @param id
 * @route DELETE, PATCH /category/:id
 * @desc delete and update category data
 */
router.route('/category/:id').delete(deleteProductCategory).patch(categoryMulter, editProductCategory);

/**
 * @param id
 * @route PATCH /category-status/:id
 * @desc update category status
 */
router.patch('/category-status/:id', statusUpdate);

export default router;
