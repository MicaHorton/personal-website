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

const sendMail = (req, res, next) => {
    const {name, email, message} = req.body;
    const mailOptions = {
        from: 'micahorton@gmx.com',
        to: 'micahorton@protonmail.com',
        subject: 'Message from ' + name + ' at ' + email,
        text: message,
    };

    transporter.sendMail(mailOptions, (err, data) => {
        console.log('transporter has been activated');
        
        if (err) {
            console.log('Error sending email', err);
            res.status(500);
        } else {
            console.log('sendEmail says email sent');
            res.status(200);
            next();
        }

    });

}

/*
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
    console.log('email middleware says message received', message);
    const mailOptions = {
        from: 'micahorton@gmx.com',
        to: 'micahorton@protonmail.com',
        subject: 'Message from ' + name + ' at ' + email,
        text: message,
    };

    console.log('this is the transporter', transporter);

    transporter.sendMail(mailOptions, (err, data) => {

        console.log('transporter has been activated');
        
        if (err) {
            console.log('Error sending email', err)
        } else {
            console.log('sendEmail says email sent')
        }
    });
} */

module.exports = sendMail;