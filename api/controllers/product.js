import Product from '../models/Product.js';

/**
 * @function getAllProduct
 * you can get a list of tags
 */
export const getAllProduct = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      msg: 'product fetch Success',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function createProduct
 * you can create a single product
 */
export const createProduct = async (req, res, next) => {
  try {
    const { product, slug, price, desc } = req.body;

    const galleryData = [];

    const fileData = req.files.gallery_photo;

    fileData.forEach((gal) => {
      galleryData.push(gal.filename);
    });
    const data = await Product.create({
      product,
      slug,
      price,
      desc,
      photo: req.files.product_photo[0].filename,
      gallery: galleryData,
    });
    res.status(200).json({
      msg: 'product create Success',
      product: data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function getSingleProduct
 * you can get a single product by id
 */
export const getSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getData = await Product.findById(id);
    res.status(200).json({
      getData,
      msg: 'got single product',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function deleteProduct
 * delete a single product by id
 */
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      msg: 'product deleted',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProduct
 * edit a single product by id
 */
export const editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { product, slug, price, desc } = req.body;

    const updateData = await Product.findByIdAndUpdate(
      id,
      {
        product,
        slug,
        price,
        desc,
      },
      { new: true }
    );
    res.status(200).json({ updateData, msg: 'product updated' });
  } catch (error) {
    next(error);
  }
};
