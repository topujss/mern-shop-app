import mongoose, { model, Schema } from 'mongoose';

const productSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
    },
    condition: {
      type: String,
      trim: true,
      enum: ['New', 'Refurbised', 'Clearance'],
      default: 'New',
    },
    stock: {
      type: Number,
      default: null,
    },
    catergories: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Category',
      default: [],
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Tag',
      default: [],
    },
    brands: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Brand',
      default: null,
    },
    desc: {
      type: String,
      trim: true,
    },
    long_desc: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    gallery: {
      type: Array,
      trim: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export brand model
export default model('Product', productSchema);
