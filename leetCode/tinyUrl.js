
var obj = {};

var encode = function (longUrl) {
    let origin = "http://tinyurl.com/",
    randomString = Math.random().toString(36).substring(5);
    obj[randomString] = longUrl;
    return origin += randomString;
};

var decode = function (shortUrl) {
    let getKey = shortUrl.split("/");
    return obj[getKey[getKey.length - 1]];
};

