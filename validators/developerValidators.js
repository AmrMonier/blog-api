const { body } = require("express-validator");
const Developer = require("../Models/DeveloperModel");
const developerValidators = {
  register: [
    body(
      "firstName",
      "First Name must contain only alphabetic and be at least 2 characters"
    )
      .isAlpha()
      .isLength({ min: 2, max: 15 }),

    body(
      "lastName",
      "Last Name must contain only alphabetic and be at least 2 characters"
    )
      .isAlpha()
      .isLength({ min: 2, max: 15 }),

    body("email", "This is an Invalid Email")
      .isEmail()
      .normalizeEmail()
      .custom((value) => {
        return Developer.findOne({ email: value }).then((dev) => {
          if (dev !== null) {
            return Promise.reject("Email already exist");
          }
        });
      }),

    body("password", "password must be at least 8 characters")
      .isAlphanumeric()
      .isLength({ min: 8 }),

    body("c_password", "Password doesn't match").custom((value, { req }) => {
      return value === req.body.password ? true : false;
    }),
  ],
};

module.exports = developerValidators;
