const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amina@gmail.com",
    pass: "12345678amina"
  }
});

const mailOptions = {
  from: "amina@gmail.com",
  to: "amina@gmail.com",
  subject: "Node.js Test",
  text: "Hello from Node.js!"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent successfully!");
    console.log(info.response);
  }
});
