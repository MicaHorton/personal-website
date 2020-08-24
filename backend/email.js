const nodemailer = require('nodemailer');
require('dotenv').config();
const password = process.env.GMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mica.e.horton@gmail.com',
      pass: password 
    }
  });

const sendMail = (name, email, message) => {
    const mailOptions = {
        from: 'mica.e.horton@gmail.com',
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