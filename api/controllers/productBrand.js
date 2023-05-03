import Brand from '../models/Brand.js';
import { slugify } from '../helper/slugify.js';
import { unlinkSync } from 'fs';

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
    const data = await Brand.create({
      name,
      slug: slugify(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      brand: data,
      msg: 'brand created',
    });
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
    const deleted = await Brand.findByIdAndDelete(id);

    // delete single product photo
    unlinkSync(`api/public/brands/${deleted.photo}`);

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
 */
export const editProductBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;

    const data = await Brand.findByIdAndUpdate(
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
    res.status(200).json({ brand: data, msg: 'product brand updated' });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProductBrand
 * edit a single product brand by id
 */
export const statusUpdate = async (req, res, next) => {
  try {
    // get id from params
    const { id } = req.params;

    // get status from body
    const { status } = req.body;

    // send data to update data from server
    const brand = await Brand.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      brand,
      message: 'Brand status updated',
    });
  } catch (error) {
    next(error);
  }
};
