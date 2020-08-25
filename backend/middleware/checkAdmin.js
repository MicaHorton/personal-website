const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const checkAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('http://localhost:3000/admin');

      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    console.log('Your verified');
    // res.redirect('/admin/console');
  }
};

module.exports = checkAuth;