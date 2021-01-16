const nodemailer = require('nodemailer');
require('dotenv').config();
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    host: 'mail.gmx.com',
    port: 587,
    secureConnection: true,
    auth: {
      user: 'micahorton@gmx.com',
      pass: password 
    }
  });

const sendMail = (name, email, message) => {
    const mailOptions = {
        from: 'micahorton@gmx.com',
        to: 'micahorton@protonmail.com',
        subject: 'Message from ' + name + ' at ' + email,
        text: message,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error sending email', err)
        } else {
            console.log('Email.js says email sent')
        }
    });
}

module.exports = sendMail;