const express = require("express");

const developerController = require("../controllers/developerController.js");
const developerValidators = require("../validators/developerValidators.js");
const Authenticated = require("../middlewares/authenticationMiddleware.js");
const routes = express.Router();

routes.get("/", Authenticated.isAuthenticated, developerController.index);

routes
  .route("/register")
  .get(Authenticated.isNotAuthenticated, developerController.viewRegisterForm)
  .post(Authenticated.isNotAuthenticated,developerValidators.register, developerController.register);

routes
  .route("/login")
  .get(Authenticated.isNotAuthenticated, developerController.viewLoginForm)
  .post(developerController.login);
  
routes.get('/verify/:token', developerController.verify)

routes.post("/logout", developerController.logout);

module.exports = routes;
