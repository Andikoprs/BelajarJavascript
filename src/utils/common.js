const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.makeSalt = () => {
  return Math.round(new Date().valueOf() * Math.random()) + "";
};

exports.encrypt = (string, salt) => {
  return encrypt(string, salt);
};

const encrypt = (string, salt) => {
  if (!string || !salt) {
    throw new Error("string & salt required");
  }

  if (typeof string !== "string") {
    string = String(string);
  }

  try {
    return crypto.createHmac("sha1", salt).update(string).digest("hex");
  } catch (err) {
    throw new Error("Encryption Failed");
  }
};

exports.compare = (strInput, strDatabase, salt) => {
  let encryptedInput = encrypt(strInput, salt);

  return encryptedInput === strDatabase;
};

exports.getToken = (tokenData, expiresIn) => {
  let tokenExpiration;

  tokenExpiration = {
    expiresIn: expiresIn || process.env.JWT_EXPIRES_IN,
  };

  let secretKey = process.env.JWT_SECRET;
  return jwt.sign(tokenData, secretKey, tokenExpiration);
};

exports.getUserId = (token) => {
  let secretKey = process.env.JWT_SECRET;
  let tokenDecode = jwt.verify(token, secretKey);
  return tokenDecode._doc._id;
};

exports.getJwtDecode = (token, ignoreExpiration) => {
  let secretKey = process.env.JWT_SECRET;
  let tokenDecode = jwt.verify(token, secretKey, {
    ignoreExpiration: ignoreExpiration === true,
  });
  return tokenDecode;
};
