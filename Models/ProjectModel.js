import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema(
  {
    content: {
        name: {
            type: String
        },
        token: {
            type: String
        },
        developer: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Developer'
        },
        users: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        },
        categories: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Category'
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

export default mongoose.model('Project', ProjectSchema);
