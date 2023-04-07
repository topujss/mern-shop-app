import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProduct,
  getSingleProduct,
} from '../controllers/product.js';
import { productMulter } from '../utils/multer.js';

// create router
const router = Router();

/**
 * @link /
 * get category route using params slug
 */
router.route('/').get(getAllProduct).post(productMulter, createProduct);

/**
 * @param id
 * get, put and delete  route using params id
 */
router.get('/:slug',getSingleProduct);
router.route('/:id').put(editProduct).delete(deleteProduct);

// export the route
export default router;
