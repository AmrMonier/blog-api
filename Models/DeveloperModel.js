import mongoose from 'mongoose';

const DeveloperSchema = mongoose.Schema(
  {
    content: {
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        password: {type: String},
        verified: {type: Boolean, default: false},
        projects: {
          type: mongoose.Schema.Types.ObjectId,
           ref: 'Project'
        }
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Developer', DeveloperSchema);
