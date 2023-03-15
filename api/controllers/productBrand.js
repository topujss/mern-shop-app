import Brand from '../models/Brand.js';

// error message if req failed
const errMsg = (err) => console.log(`${err.message}`.bgRed);

/**
 * @function getAllBrand
 * you can get a list of brands
 */
export const getAllProductBrand = async (req, res) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      brands: data,
      msg: 'brands fetch Success',
    });
  } catch (error) {
    errMsg(error);
  }
};

/**
 * @function createProductBrand
 * you can create a single brand
 */
export const createProductBrand = async (req, res) => {
  try {
    const { brand, slug } = req.body;
    const data = await Brand.create({
      brand,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      msg: 'brand created',
    });
  } catch (error) {
    errMsg(error);
  }
};

/**
 * @param slug
 * @function getSingleProductBrand
 * you can get a single brand by slug
 */
export const getSingleProductBrand = async (req, res) => {
  try {
    const { slug } = req.params;
    const getData = await Brand.findOne({ slug });
    res.status(200).json({
      brand: getData,
      msg: 'got single product brand',
    });
  } catch (error) {
    errMsg(error);
  }
};

/**
 * @param id
 * @function deleteProductBrand
 * delete a single product brand by id
 */
export const deleteProductBrand = async (req, res) => {
  try {
    const { id } = req.params;
    await Brand.findByIdAndDelete(id);
    res.status(200).json({
      msg: 'product brand deleted',
    });
  } catch (error) {
    errMsg(error);
  }
};

/**
 * @param id
 * @function editProductBrand
 * edit a single product brand by id
 */
export const editProductBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { brand, slug } = req.body;

    await Brand.findByIdAndUpdate(id, { brand, slug }, { new: true });
    res.status(200).json({ msg: 'product brand updated' });
  } catch (error) {
    errMsg(error);
  }
};
