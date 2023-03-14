import { diskStorage } from 'multer';

// create disk storage for picture
const storage = diskStorage({
  filename: (req, res, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
  destination: (req, res, cb) => (null, 'api/public/product/category'),
});
