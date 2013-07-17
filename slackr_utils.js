var crypto = require('crypto');

var generateNonce = function(cb){
    crypto.randomBytes(48, function(ex, buf) {
        cb(buf.toString('hex'));
        return
    });
}
var requestHash = function(cb) {
    crypto.randomBytes(2, function (ex, buf) {
        if (ex) throw ex;
        console.log('randomness=' + buf.toString('hex'))
        cb(buf.toString('hex'));
        return;
    })
}

module.exports.generateNonce = generateNonce;
module.exports.requestHash = requestHash;