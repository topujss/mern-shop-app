import Category from '../models/Category.js';

/**
 * @function getAllCategory
 * you can get a list of categories
 */

export const getAllProductCategory = async (req, res) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: 'Got all data',
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

/**
 * @function createProductCategory
 * you can get a list of categories
 */
export const createProductCategory = async (req, res) => {};
