const route = require("express").Router();
const {
  login,
  userDashboard,
  adminDashboard,
  managerDashboard,
} = require("../controller");
const { verifyToken } = require("../middleware/jwt");

route.post("/login", login);
route.get("/user/view_user_dashboard", verifyToken, userDashboard);
route.get("/admin/view_admin_dashboard", verifyToken, adminDashboard);
route.get("/manager/view_manager_dashboard", verifyToken, managerDashboard);

module.exports = route;
