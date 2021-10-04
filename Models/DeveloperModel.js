const  mongoose  = require('mongoose');

const DeveloperSchema = mongoose.Schema(
  {
    
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
  {
    timestamps: true,
  }
);
DeveloperSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
 }
module.exports =  mongoose.model('Developer', DeveloperSchema);
