import {Router} from 'express';
import { createProductCategory, getAllProductCategory } from '../../controllers/productCategory.js';

// create router
const router = Router();

// route
router.route('/category').get(getAllProductCategory).post(createProductCategory);

export default router;
