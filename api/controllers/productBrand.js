import Brand from '../models/Brand.js';
import { slugify } from '../helper/slugify.js';

/**
 * @function getAllBrand
 * you can get a list of brands
 */
export const getAllProductBrand = async (req, res, next) => {
  try {
    const data = await Brand.find();
    res.status(200).json({
      brands: data,
      msg: 'brands fetch Success',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function createProductBrand
 * you can create a single brand
 */
export const createProductBrand = async (req, res, next) => {
  try {
    const { name } = req.body;
    console.log(req.body);
    console.log(name);
    const data = await Brand.create({
      name,
      slug: slugify(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      msg: 'brand created',
    });
    console.log(req.body);
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function getSingleProductBrand
 * you can get a single brand by slug
 */
export const getSingleProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getData = await Brand.findById(id);
    res.status(200).json({
      getData,
      msg: 'got single product brand',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function deleteProductBrand
 * delete a single product brand by id
 */
export const deleteProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Brand.findByIdAndDelete(id);
    res.status(200).json({
      msg: 'product brand deleted',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProductBrand
 * edit a single product brand by id
 */
export const editProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { brand, slug, photo } = req.body;

    await Brand.findByIdAndUpdate(id, { brand, slug, photo }, { new: true });
    res.status(200).json({ msg: 'product brand updated' });
  } catch (error) {
    next(error);
  }
};
