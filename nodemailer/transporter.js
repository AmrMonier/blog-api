const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "monierblog@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
});

transporter.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".hbs",
      layoutsDir: "views/email/layouts",
      defaultLayout: "main",
    },
    viewPath: "views/email",
    extName: ".hbs",
  })
);

module.exports = {
  sendMail: (mailDetails) => {
    transporter.sendMail(mailDetails, (err, mail) => {
      if (err) {
        console.log('failed to send the email, trying again...');
        this.sendMail(mailDetails)
      } else {
        console.log("msg sent");
        return true;
      }
    });
  },
};
