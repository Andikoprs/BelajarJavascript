const UserModel = require("./user.model");

const common = require("../../utils/common");

async function getUsers(req, res) {
  const users = await UserModel.find();
  return res.json(users);
}

async function getUserById(req, res) {
  const user = await UserModel.findById(req.params._id).populate({
    path: "book_ids",
  });
  return res.json(user);
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
  try {
    if (!Object.keys(req.body).length) {
      return res.json({ message: "body request can not be empty!" });
    }

    const update = req.body;
    let user = await UserModel.findByIdAndUpdate(req.params._id, update, {
      new: true,
    }).populate({ path: "book_ids" });

    return res.json(user);
  } catch (error) {
    return res.json({ error });
  }
}

async function deleteUser(req, res) {
  if (req.params) {
    await UserModel.deleteOne(req.params);
    const users = await UserModel.find({});
    return res.json(users);
  } else if (!req.params) {
    return res.json({ message: "value not identify" });
  }
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
  getUserById,
  createUser,
  deleteUser,
  updateUser,
  login,
};
