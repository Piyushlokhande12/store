import Book from "../modals/bookmodel.js";

export const getBook = async(req, res) => {
     try {
    const books = await Book.find({}); // Assuming you're using Mongoose
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

