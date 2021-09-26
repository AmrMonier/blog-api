import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema(
  {
    content: {
        name: {type: String}
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Category', CategorySchema);
