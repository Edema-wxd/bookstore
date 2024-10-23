const express = require("express");
const {
  postBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const router = express.Router();

// POST BOOK
router.post("/create-book", postBook);

// GET all books
router.get("/", getBooks);

// GET a single book
router.get("/:id", getBook);

// UPDATE / PUT  a book
router.put("/edit-book/:id", updateBook);

// DELETE a book
router.delete("/delete-book/:id", deleteBook);

module.exports = router;
