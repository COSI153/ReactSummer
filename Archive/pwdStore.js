const crypto = require('crypto');

function getSalt() {
    return crypto.randomBytes(128).toString('base64');
}

function cryptPwd(password,salt) {
    // Add salt to raw password
    var saltPassword = password + ':' + salt;
    // Calculate salted hash
    var md5 = crypto.createHash('md5');
    var result = md5.update(saltPassword).digest('hex');
    return result
    // console.log('md5：%s', result);
}
