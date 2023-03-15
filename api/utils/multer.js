import multer from 'multer';

// create disk storage for picture
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname);
  },
  destination: (req, file, cb) => cb(null, 'api/public/product/category'),
});

// product Category middleware function
export const categoryMulter = multer({ storage }).single('category-photo');
