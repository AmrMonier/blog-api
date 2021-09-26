import mongoose from 'mongoose';

const PostSchema = mongoose.Schema(
  {
    content: {
        title: {type: String},
        cover: {type: String},
        content: {type: String}
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', PostSchema);
