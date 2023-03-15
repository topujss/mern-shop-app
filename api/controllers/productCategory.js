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

export const createProductCategory = async (req, res) => {
  try {
    const { name, slug } = req.body;
    const data = await Category.create({ name, slug, photo: req.file.filename });
    res.status(200).json({
      category: data,
      msg: 'Created category',
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

/**
 * @param slug
 * @function getSingleProductCategory
 * you can get a list of categories
 */

export const getSingleProductCategory = async (req, res) => {
  try {
    // get slug from request params
    const { slug } = req.params;

    // find data according to params slug
    const data = await Category.findOne({ slug });

    // send data to server to process the response
    res.status(200).json({
      category: data,
      msg: 'Single category created',
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

/**
 * @param id
 * @function deleteProductCategory
 * you can delete a single category using params id
 */

export const deleteProductCategory = async (req, res) => {
  try {
    // get id from request params
    const { id } = req.params;

    // find and delete data according to params id
    const data = await Category.findByIdAndDelete(id);

    // send success message
    res.status(200).json({
      msg: 'Category deleted successfully',
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};

/**
 * @param id
 * @function editProductCategory
 * you can edit a single category using params id
 */
export const editProductCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;

    // use new: true for instant update
    const data = await Category.findByIdAndUpdate(id, { name, slug }, { new: true });
    res.status(200).json({
      msg: 'Category updated successfully',
    });
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};
