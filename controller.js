const { object } = require("webidl-conversions");
const { findOneAndUpdate } = require("./model");
const model = require("./model");

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
  const allUser = await model.find({});
  res.json(allUser);
}

async function addUser(req, res) {
  if (req.body.nickName) {
    const user = await model.create({
      nick_name: req.body.nickName,
    });
    res.json(user);
  } else if (!req.body.nickName) {
    res.json({ message: "value not identify" });
  }
}

async function updateData(req, res) {
  if (req.body.nick_name || req.body.age) {
    const filter = { _id: req.params.id };
    const update = req.body;
    let user = await model.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(user);
  } else if (!req.body.nick_name || !req.body.age) {
    res.json({ message: "value not identify" });
  }
}

async function deleteData(req, res) {
  if (req.body.nick_name || req.body.age) {
    let user = await model.deleteOne(req.body);
    const allUser = await model.find({});
    res.json(allUser);
  } else if (!req.body.nick_name || !req.body.age) {
    res.json({ message: "value not identify" });
  }
  // const dataUserIndex = dataUsers.findIndex((eachData) => {
  //   if (eachData.id === req.params.id) {
  //     return eachData;
  //   }
  // });
  // dataUsers.splice(dataUserIndex, 1);
  // res.json(dataUsers);
}

async function getAllNickNames(req, res) {
  const getAllNickNames = dataUsers.map((eachData) => eachData.nickName);
  console.log(getAllNickNames);
  res.json(getAllNickNames);
}

async function getDataById(req, res) {
  const user = await model.findById(req.params.id);
  res.json(user);
}

module.exports = {
  getAllUsers,
  addUser,
  deleteData,
  updateData,
  getAllNickNames,
  getDataById,
};
