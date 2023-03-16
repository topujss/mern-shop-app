import { model, Schema } from 'mongoose';

const brandSchema = Schema(
  {
    brand: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
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
export default model('Brand', brandSchema);
