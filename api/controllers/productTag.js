import Tag from '../models/Tag.js';

/**
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
 * @function createProductTag
 * you can create a single tag
 */
export const createProductTag = async (req, res, next) => {
  try {
    const { tag, slug } = req.body;
    const data = await Tag.create({
      tag,
      slug,
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
    const { tag, slug } = req.body;

    const updateData = await Tag.findByIdAndUpdate(id, { tag, slug }, { new: true });
    res.status(200).json({ updateData, msg: 'product Tag updated' });
  } catch (error) {
    next(error);
  }
};
