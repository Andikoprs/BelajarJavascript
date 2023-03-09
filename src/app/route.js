const express = require("express");
const router = express.Router();

const Middleware = require("../utils/middleware");
const UserController = require("./user/user.controller");

router.get("/users", Middleware.checkToken, UserController.getUsers);
router.post("/users", Middleware.checkToken, UserController.createUser);
router.put("/users/:id", Middleware.checkToken, UserController.updateUser);
router.delete("/users/:id", Middleware.checkToken, UserController.deleteUser);
router.get("/users/:id", Middleware.checkToken, UserController.getUserById);
router.post("/login", UserController.login);

module.exports = router;
