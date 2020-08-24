const router = require('express').Router();
const cookieParser = require('cookie-parser');


/* Login User */
/*
router.get('/login', (req, res) => {
    res.send('get login');
}); */

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    res.send('user login');

});

/* Set Cookies */
router.use(cookieParser());
router.get('/set-cookies', (req, res) => {

  // res.setHeader('Set-Cookie', 'newUser=true');
  
  res.cookie('isAdmin', false);

  res.send('you got the cookies!');

});

module.exports = router;