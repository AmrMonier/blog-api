import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    content: {
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        password: {type: String},
        role:{type: String, enum: ['admin', 'writer', 'user']},
        project: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Project'
        },
        posts: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Post'
        },
        
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
