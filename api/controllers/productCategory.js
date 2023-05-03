import { slugify } from '../helper/slugify.js';
import Category from '../models/Category.js';
import { customErr } from '../utils/customError.js';
import { unlinkSync } from 'fs';

/**
 * @function getAllCategory
 * you can get a list of categories
 */

export const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: 'Got all data',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function createProductCategory
 * you can get a list of categories
 */

export const createProductCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Category.create({
      name,
      slug: slugify(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      msg: 'Created category',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param slug
 * @function getSingleProductCategory
 * you can get a list of categories
 */

export const getSingleProductCategory = async (req, res, next) => {
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
    next(customErr('Product is missing', 404));
  }
};

/**
 * @param id
 * @function deleteProductCategory
 * you can delete a single category using params id
 */

export const deleteProductCategory = async (req, res, next) => {
  try {
    // get id from request params
    const { id } = req.params;

    // find and delete data according to params id
    const data = await Category.findByIdAndDelete(id);

    // delete single product photo
    unlinkSync(`api/public/categories/${data.photo}`);

    // send success message
    res.status(200).json({
      msg: 'Category deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProductCategory
 * you can edit a single category using params id
 */
export const editProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;

    // use new: true for instant update
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
        photo: req.file?.filename ? req.file?.filename : photo,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      category: data,
      msg: 'Category updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function updateProductCategory
 * update a single status using params id
 */
export const statusUpdate = async (req, res, next) => {
  try {
    // get id from params
    const { id } = req.params;

    // get status from body
    const { status } = req.body;

    // send data to update data from server
    const category = await Category.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      category,
      message: 'Category status updated',
    });
  } catch (error) {
    next(error);
  }
};
