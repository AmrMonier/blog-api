const { validationResult } = require("express-validator");

const Developer = require("../Models/DeveloperModel");
const Token = require("../Models/TokenModel");
const { hash, verify } = require("../modules/crypto.js");
const { sendVerificationMail } = require("../nodemailer/mails.js");

class DeveloperController {
  async index(req, res) {
    return res.render("developer/index", { user: req.session.user });
  }

  async viewRegisterForm(req, res) {
    return res.render("developer/register");
  }

  async register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("developer/register", {
        errors: errors.mapped(),
        data: req.body,
      });
    }
    const data = req.body;
    Developer.create(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: await hash(data.password),
      },
      (err, dev) => {
        sendVerificationMail(dev);
        req.session.user = dev;
        req.session.save();
        res.redirect("/");
      }
    );
  }
  
  async viewLoginForm(req, res) {
    res.render("developer/login");
  }

  async login(req, res) {
    const data = req.body;
    Developer.findOne({ where: { email: data.email } }, (err, dev) => {
      if (dev !== null) {
        if (verify(data.password, dev.password)) {
          req.session.user = dev;
          req.session.save();
          return res.redirect("/developer");
        }
      }
      return res.render("developer/login", {
        errors: {
          email: { value: data.email, msg: "invalid username or password" },
        },
      });
    });
  }

  async verify(req, res) {
    let token = req.params.token;
    Token.findOne({ token }, (err, token) => {
      if (token !== null) {
        Developer.findById(token.user, (err, dev) => {
          if (dev !== null) {
            if (token.expirationDate > Date.now()) {
              dev.verified = true;
              dev.save();
              Token.deleteOne({ _id: token._id }).exec();
              return res.render("developer/verification", {
                response: `your E-Mail: <strong>${dev.email}</strong> verified successfully.`,
              });
            } else {
              sendVerificationMail(dev);
              return res.render("developer/verification", {
                response: `Expired Token, check your E-Mail we already sent you another mail`,
              });
            }
          } else {
            return res.render("developer/verification", {
              response: `Expired Token`,
            });
          }
        });
      } else {
        return res.render("developer/verification", {
          response: `Expired Token`,
        });
      }
    });
  }

  async logout(req, res) {
    req.session.destroy();
    return res.redirect("login");
  }
}
module.exports = new DeveloperController();
