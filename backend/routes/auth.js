const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send('get login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    res.send('user login');

});


module.exports = router;