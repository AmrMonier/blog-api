import mongoose from 'mongoose';

const CategorySchema = mongoose.Schema(
  {
    content: {
        name: {type: String},
        project: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project'
        },
        posts: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
        }
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Category', CategorySchema);
