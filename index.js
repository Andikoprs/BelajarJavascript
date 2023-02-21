const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const controller = require("./controller");

app.get("/users", controller.getAllUsers);

//api insert
app.post("/users", controller.addUser);

//api update
app.put("/users/:id", controller.updateData);

//api delete
app.delete("/users/:id", controller.deleteData);

//api get
app.get("/users/nickNames", controller.getAllNickNames);

app.get("/users/:id", controller.getDataById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
