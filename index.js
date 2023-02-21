const express = require("express");
const app = express();
const port = 3000;

const dataUsers = [
  {
    nickName: "Sasa",
    id: "1",
  },
  {
    nickName: "Susu",
    id: "2",
  },
  {
    nickName: "Sisi",
    id: "3",
  },
];

app.get("/", (req, res) => {
  res.json({
    nickName: "Andikopts",
  });
});

app.get("/users", (req, res) => {
  res.json(dataUsers);
});

app.get("/users/nickNames", (req, res) => {
  const getAllNickNames = dataUsers.map((eachData) => eachData.nickName);
  console.log(getAllNickNames);
  res.json(getAllNickNames);
});

app.get("/users/:id", (req, res) => {
  const getId = dataUsers.find((eachData) => {
    if (eachData.id === req.params.id) {
      return eachData;
    }
  });
  res.json(getId);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
