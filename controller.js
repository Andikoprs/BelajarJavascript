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

module.exports = {
  getAllUsers,
};
