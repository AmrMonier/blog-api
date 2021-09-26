import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    content: {
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        password: {type: String},
        role:{type: String, enum: ['admin', 'writer', 'user']}
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
