const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const sendMail = require('./routes/email');
require('dotenv').config();

// Initialize Dependnecies and Set Port
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect To Mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Connect Projects URL Ending to Router
const projectRouter = require('./routes/project');
app.use('/projects', projectRouter);

// Use Email URL Ending to Send Mail
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