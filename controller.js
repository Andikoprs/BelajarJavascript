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

async function getAllUsers(req, res) {
  res.json(dataUsers);
}

async function addUser(req, res) {
  console.log(req.body);
  if (req.body.nickName !== "" && req.body.id !== "") {
    dataUsers.push(req.body);
    res.json(dataUsers);
  } else if (req.body.nickName == "" || req.body.id == "") {
    res.json({ message: "value not identify" });
  }
}

async function updateData(req, res) {
  const userIndex = dataUsers.findIndex((eachData) => {
    if (eachData.id === req.params.id) {
      return eachData;
    }
  });
  dataUsers[userIndex].nickName = req.body.nickName;
  res.json(dataUsers);
}

async function deleteData(req, res) {
  const dataUserIndex = dataUsers.findIndex((eachData) => {
    if (eachData.id === req.params.id) {
      return eachData;
    }
  });
  dataUsers.splice(dataUserIndex, 1);
  res.json(dataUsers);
}

async function getAllNickNames(req, res) {
  const getAllNickNames = dataUsers.map((eachData) => eachData.nickName);
  console.log(getAllNickNames);
  res.json(getAllNickNames);
}

async function getDataById(req, res) {
  const getId = dataUsers.find((eachData) => {
    if (eachData.id === req.params.id) {
      return eachData;
    }
  });
  if (!getId) {
    res.json({ message: "Error. Data not found" });
  }
  res.json(getId);
}

module.exports = {
  getAllUsers,
  addUser,
  deleteData,
  updateData,
  getAllNickNames,
  getDataById,
};
