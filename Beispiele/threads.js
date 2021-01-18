const crypto = require('crypto');
const start = Date.now();

function hashing() {
  crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512', (err, hash) => {
    if (err) return 0;
    console.log("Hash: ", Date.now() - start, hash);
  });
}
hashing();
hashing();
hashing();
hashing();
