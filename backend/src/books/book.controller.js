const Book = require("./book.model");

const postBook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating Book", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching Book", error);
    res.status(500).send({ message: "Failed to fetch all book" });
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not in Store" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching Book", error);
    res.status(500).send({ message: "Failed to fetch book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "Book not found" });
    }
    res
      .status(200)
      .send({ message: "Book updated successfully", book: updateBook });
  } catch (error) {
    console.error("Error updating Book", error);
    res.status(500).send({ message: "Failed to update book" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const newBook = await Book.findByIdAndDelete(id);
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book deleted successfully", book: newBook });
  } catch (error) {
    console.error("Error deleting Book", error);
    res.status(500).send({ message: "Failed to delete book" });
  }
};

module.exports = {
  postBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};