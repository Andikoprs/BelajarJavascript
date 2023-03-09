const UserModel = require("./user.model");

const common = require("../../utils/common");

async function getUsers(req, res) {
  const users = await UserModel.find({});
  res.json(users);
}

async function createUser(req, res) {
  try {
    if (!Object.keys(req.body).length) {
      return res.json({ message: "body request can not be empty!" });
    }

    let salt = common.makeSalt();
    let encryptedPassword = common.encrypt(req.body.password, salt);

    const user = await UserModel.create({
      ...req.body,
      password: encryptedPassword,
      salt,
    });
    return res.json(user);
  } catch (error) {
    return res.json({ error });
  }
}

async function updateUser(req, res) {
  if (req.body.nick_name || req.body.age) {
    const filter = { _id: req.params.id };
    const update = req.body;
    let user = await UserModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.json(user);
  } else if (!req.body.nick_name || !req.body.age) {
    res.json({ message: "value not identify" });
  }
}

async function deleteUser(req, res) {
  if (req.params) {
    await UserModel.deleteOne(req.params);
    const users = await UserModel.find({});
    res.json(users);
  } else if (!req.params) {
    res.json({ message: "value not identify" });
  }
}

async function getUserById(req, res) {
  const user = await UserModel.findById(req.params.id);
  res.json(user);
}

async function login(req, res) {
  try {
    if (!Object.keys(req.body).length) {
      return res.json({ message: "body request can not be empty!" });
    }

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    const matched = common.compare(password, user.password, user.salt);

    if (!matched) {
      return res.json({
        message: "password invalid",
      });
    }

    const token = common.getToken({ ...user });

    return res.json({
      token,
      user,
    });
  } catch (error) {
    return res.json({ error });
  }
}

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  login,
};
