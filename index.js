const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

//api insert
app.post("/users", (req, res) => {
  console.log(req.body);
  dataUsers.push(req.body);
  res.json(dataUsers);
});

//api update
app.put("/users/:id", (req, res) => {
  const updateDataUserIndex = dataUsers.findIndex((eachData) => {
    if (eachData.id === req.params.id) {
      return eachData;
    }
  });
  dataUsers[updateDataUserIndex].nickName = req.body.nickName;
  res.json(dataUsers);
});

//api delete
app.delete("/users/:id", (req, res) => {
  const dataUserIndex = dataUsers.findIndex((eachData) => {
    if (eachData.id === req.params.id) {
      return eachData;
    }
  });
  dataUsers.splice(dataUserIndex, 1);
  res.json(dataUsers);
});

//api get
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
