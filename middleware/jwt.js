const jwt = require("jsonwebtoken");
secretKey = "sagdjhada";
const roles = require("../role");
exports.generateToken = (data) => {
  try {
    token = jwt.sign(data, secretKey);
    return token;
  } catch (error) {
    console.log("TCL: exports.generateToken -> error", error);
    return false;
  }
};

exports.verifyToken = (req, res, next) => {
  try {
    let data = jwt.verify(req.headers.authorization, secretKey);
    url = req.url.split("/");

    roleData = roles.roles.find((ele) => (ele.role = data.role));
    checkAccess = roleData.permissions.includes(url[url.length - 1]);
    if (!checkAccess) {
      return res.send({ message: "unauthorise access" });
    }
    return next();
  } catch (error) {
    console.log("TCL: exports.generateToken -> error", error);
    return false;
  }
};
