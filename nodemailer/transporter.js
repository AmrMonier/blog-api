const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "monierblog@gmail.com",
    pass: process.env.GMAIL_PASS,
  },
});
module.exports = {
  sendMail: (mailDetails) => {
    transporter.sendMail(mailDetails, (err, mail) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        console.log('msg sent');
        return true
      };
    });
  },
};
