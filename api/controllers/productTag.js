import { slugify } from '../helper/slugify.js';
import Tag from '../models/Tag.js';

/**
 * @host get
 * @function getAllTag
 * you can get a list of tags
 */
export const getAllProductTag = async (req, res, next) => {
  try {
    const data = await Tag.find();
    res.status(200).json({
      tags: data,
      msg: 'Tag fetch Success',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @host post
 * @function createProductTag
 * you can create a single tag
 */
export const createProductTag = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Tag.create({
      name,
      slug: slugify(name),
    });
    res.status(200).json({
      tag: data,
      msg: 'tag created',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @host get
 * @param id
 * @function getSingleProductTag
 * you can get a single tag by id
 */
export const getSingleProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getData = await Tag.findById(id);
    res.status(200).json({
      getData,
      msg: 'got single product tag',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @host delete
 * @param id
 * @function deleteProductTag
 * delete a single product tag by id
 */
export const deleteProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Tag.findByIdAndDelete(id);

    res.status(200).json({
      msg: 'product tag deleted',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProductTag
 * edit a single product tag by id
 */
export const editProductTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updateData = await Tag.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
      },
      {
        new: true,
      }
    );
    res.status(200).json({ tags: updateData, msg: 'product Tag updated' });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function statusUpdate
 * edit a single product brand by id
 */
export const statusUpdate = async (req, res, next) => {
  try {
    // get id from params
    const { id } = req.params;

    // get status from body
    const { status } = req.body;

    // send data to update data from server
    const tag = await Tag.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      tag,
      message: 'Tag status updated',
    });
  } catch (error) {
    next(error);
  }
};
