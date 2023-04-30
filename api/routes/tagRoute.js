import { Router } from 'express';
import {
  createProductTag,
  deleteProductTag,
  editProductTag,
  getAllProductTag,
  getSingleProductTag,
  statusUpdate,
} from '../controllers/productTag.js';

// create Tag router
const router = Router();

/**
 * @link /tag
 * get category route using params slug
 */
router.route('/tag').get(getAllProductTag).post(createProductTag);

/**
 * @param id
 * get, put and delete Tag route using params id
 */
router.route('/tag/:id').get(getSingleProductTag).put(editProductTag).delete(deleteProductTag);

router.patch('/tag-status/:id', statusUpdate);

export default router;
