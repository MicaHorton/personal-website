const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const sendMail = require('./middleware/sendEmail');
require('dotenv').config();

// Initialize Dependnecies and Set Port
const app = express();
const port = process.env.PORT || 5000;

var whitelist = ['http://localhost:3000', 'https://personal-website-279319.wl.r.appspot.com','https://micahorton.com','https://www.micahorton.com','https://mighty-deer-93.loca.lt']
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
const projectRouter = require('./routes/project');
app.use('/projects', projectRouter);

// Connect Admin Router
const adminRouter = require('./routes/admin');
app.use(adminRouter);

// Send Mail with Email URL Ending
app.post('/email', (req, res) => {
  res.json({message: 'Message recieved'});
  const {name, email, message} = req.body;

  sendMail(name, email, message, () => {
    if (err) {
      console.log('Error sending email', err);
      return res.status(500).json({ message: err.message || 'Internal Error' });
    }
      console.log('Server.js says email sent');
      return res.json({ message: 'Email sent' });
  })
})

// Listen for Connection on Port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});