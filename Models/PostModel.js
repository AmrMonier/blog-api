import mongoose from 'mongoose';

const PostSchema = mongoose.Schema(
  {
    content: {
        title: {type: String},
        cover: {type: String},
        content: {type: String},
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        project: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project'
        },
        comments: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment'
        }
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', PostSchema);
