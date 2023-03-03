const model = require("./model");

async function getAllUsers(req, res) {
  const allUser = await model.find({});
  res.json(allUser);
}

async function addUser(req, res) {
  if (req.body.nickName) {
    const user = await model.create({
      nick_name: req.body.nickName,
      age: req.body.age,
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
  if (req.params) {
    let user = await model.deleteOne(req.params);
    const allUser = await model.find({});
    res.json(allUser);
  } else if (!req.params) {
    res.json({ message: "value not identify" });
  }
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
