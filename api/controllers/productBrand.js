import Brand from '../models/Brand.js';

// error message if req failed
const errMsg = (err) => {
  console.log(`${err.message}`.bgRed);
};

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
    errMsg(error)
  }
};

/**
 * @function createProductBrand
 * you can create a single brand
 */
export const createProductBrand = async (req, res) => {
  try {
  } catch (error) {
    errMsg(error);
  }
};
