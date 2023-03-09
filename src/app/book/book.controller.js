const BookModel = require("./book.model");

async function getBooks(req, res) {
  try {
    const books = await BookModel.find();
    return res.json(books);
  } catch (error) {
    return res.json({ error });
  }
}

async function getBookById(req, res) {
  try {
    const book = await BookModel.findById(req.params._id);
    return res.json(book);
  } catch (error) {
    return res.json({ error });
  }
}

async function createBook(req, res) {
  try {
    if (!Object.keys(req.body).length) {
      return res.json({ message: "body request can not be empty!" });
    }

    const book = await BookModel.create({
      ...req.body,
    });
    return res.json(book);
  } catch (error) {
    return res.json({ error });
  }
}

async function updateBook(req, res) {
  try {
    if (!Object.keys(req.body).length) {
      return res.json({ message: "body request can not be empty!" });
    }

    const filter = { _id: req.params._id };
    const update = req.body;
    let book = await BookModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    return res.json(book);
  } catch (error) {
    return res.json({ error });
  }
}

async function deleteBook(req, res) {
  try {
    await BookModel.deleteOne(req.params);
    const books = await BookModel.find({});
    return res.json(books);
  } catch (error) {
    return res.json({ error });
  }
}

module.exports = {
  getBooks,
  getBookById,
  createBook,
  deleteBook,
  updateBook,
};
