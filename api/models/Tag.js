import { model, Schema } from 'mongoose';

const tagSchema = Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    slug: {
      unique: true,
      type: String,
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
export default model('Tag', tagSchema);
