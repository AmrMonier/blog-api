import mongoose from 'mongoose';

const CommentSchema = mongoose.Schema(
  {
    content: {
        content: {type: String}
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Comment', CommentSchema);
