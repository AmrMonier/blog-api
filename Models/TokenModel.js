const mongoose = require('mongoose');

const TokenSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
    token: { type: String, required: true },
    expirationDate : {type: Date, required: true, default: Date.now() + (1000 *60 *60)},
  }
  
);

module.exports = mongoose.model("Token", TokenSchema);
