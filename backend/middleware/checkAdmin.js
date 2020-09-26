const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
require('dotenv').config();
const cookieParser = require('cookie-parser');
var express = require('express')

var app = express();
app.use(cookieParser());


const checkAdmin = (req, res, next) => {
  const token = req.cookies;

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



module.exports = checkAdmin;