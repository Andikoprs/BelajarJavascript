const express = require("express");
const router = express.Router();

const Middleware = require("../utils/middleware");
const UserController = require("./user/user.controller");
const BookController = require("./book/book.controller");

router.get("/users", Middleware.checkToken, UserController.getUsers);
router.get("/users/:_id", Middleware.checkToken, UserController.getUserById);
router.post("/users", Middleware.checkToken, UserController.createUser);
router.put("/users/:_id", Middleware.checkToken, UserController.updateUser);
router.delete("/users/:_id", Middleware.checkToken, UserController.deleteUser);
router.post("/login", UserController.login);

router.get("/books", Middleware.checkToken, BookController.getBooks);
router.get("/books/:_id", Middleware.checkToken, BookController.getBookById);
router.post("/books", Middleware.checkToken, BookController.createBook);
router.put("/books/:_id", Middleware.checkToken, BookController.updateBook);
router.delete("/books/:_id", Middleware.checkToken, BookController.deleteBook);

module.exports = router;
