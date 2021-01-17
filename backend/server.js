const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialize Dependnecies and Set Port
const app = express();
const port = process.env.PORT || 5000;

var whitelist = ['http://localhost:3000','http://localhost:3001', 'https://micahorton.com', 'https://admin.micahorton.com']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }, 
  credentials: true
} 

app.use(cors(corsOptions));
app.use(express.json());

// Connect To Mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Connect Projects Router
const postRouter = require('./routes/blog');
app.use(postRouter);

// Connect Admin Router
const adminRouter = require('./routes/admin');
app.use(adminRouter);

// Connect Email Router
const emailRouter = require('./routes/email');
app.use(emailRouter);

// Listen for Connection on Port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;