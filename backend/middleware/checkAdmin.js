const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.TOKEN_SECRET;

const checkAdmin = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);

    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
            if (err) {
                console.log('ID ERROR: Could not connect to the protected route');
                res.status(403);
                res.redirect('/login');
            } else {
                console.log('SUCCESS: Connected to protected route');
                res.status(200);
                next();
            }
        });
    
    } else {
        console.log('Already verified');
        /*
        re.status(200);
        next();
        */
    }

};

module.exports = checkAdmin;