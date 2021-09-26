import mongoose from 'mongoose';

const ProjectSchema = mongoose.Schema(
  {
    content: {
        name: {
            type: String
        },
        token: {
            type: String
        }
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Project', ProjectSchema);
