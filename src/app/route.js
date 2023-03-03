const express = require("express");
const router = express.Router();

const UserController = require("./user/controller");

router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.addUser);
router.put("/users/:id", UserController.updateData);
router.delete("/users/:id", UserController.deleteData);
router.get("/users/:id", UserController.getDataById);

module.exports = router;
