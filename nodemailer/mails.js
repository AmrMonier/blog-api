const transporter = require("./transporter.js");
const Token = require("../Models/TokenModel.js");
const {generateVerificationToken} = require('../modules/tokens.js')
module.exports = {
  sendVerificationMail: (user) => {
    Token.create(
      { user: user._id, token: generateVerificationToken() },
      (err, token) => {
        transporter.sendMail({
          to: user.email,
          subject: "verify your email",
          template: "verify",
          context: { name: user.firstName, token: token.token },
        });
      }
    );
  },
};
