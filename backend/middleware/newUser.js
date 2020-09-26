/* Steps to Create New User
1) Login to MongoDB
2) Clone existing user document.
3) Enter a new email and hashed password for them.
*/

const bcrypt = require('bcrypt');
const saltRounds = 10;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Enter a password: ', password => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        console.log(hash);
    });
    readline.close();
});


