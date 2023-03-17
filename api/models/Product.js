import { model, Schema } from 'mongoose';

const productSchema = Schema(
  {
    product: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    desc: {
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
