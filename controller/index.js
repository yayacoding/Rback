const { generateToken } = require("../middleware/jwt");
const users = require("../user");

const login = async (req, res) => {
  const { username, password } = req.body;

  findUser = users.users.find(
    (ele) => ele.username == username && ele.password == password,
  );
  const token = generateToken({
    username: findUser.username,
    role: findUser.role,
  });
  return res.send({ token });
};

const adminDashboard = async (req, res) => {
  return res.send({ message: "this is admin dashboard" });
};

const managerDashboard = async (req, res) => {
  return res.send({ message: "this is manager dashboard" });
};

const userDashboard = async (req, res) => {
  return res.send({ message: "this is user dashboard" });
};

module.exports = {
  login,
  userDashboard,
  adminDashboard,
  managerDashboard,
};
