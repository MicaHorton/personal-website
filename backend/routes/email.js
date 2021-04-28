
const router = require('express').Router();
let sendMail = require('../middleware/sendEmail');

// Send Mail with Email URL Ending
router.route('/').post(sendMail, (req, res, next) => {
    res.status(200).send('Message sent');
})

/*
router.route('/email').post((req, res) => {

    console.log('routes/email says message received');

    res.json({message: 'Message recieved'});
    const {name, email, message} = req.body;
  
    sendMail(name, email, message, () => {
      if (err) {
        console.log('Error sending email', err);
        return res.status(500).json({ message: err.message || 'Internal Error' });
      }
        console.log('routes/email says email sent');
        return res.json({ message: 'Email sent' });
    })
  })
*/

module.exports = router;