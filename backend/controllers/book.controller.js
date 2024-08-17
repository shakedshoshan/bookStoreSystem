import { Book } from '../models/book.Model.js';

export  const createBook = async(req, res) => {
    try {
      if (
        !request.body.title ||
        !request.body.author ||
        !request.body.publishYear
      ) {
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  };

  //get all books
  export const getAllBooks = async(req, res) => {
    try {
      const books = await Book.find({});
      return res.status(200).json({
        count: books.length,
        data: books});
    } catch (error) {
      console.error(error.message);
      res.status(500).send({massage:error.message});
    }
  };

  //get one book
  export const getBook = async(req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).send({ message: 'Book not found' });
      return res.status(200).send(book);
    } catch (error) {
      console.error(error.message);
      res.status(500).send({ message: error.message });
    }
  };

// Route for Update a Book
export const updateBook = async(req, res) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }

    const { id } = request.params;

    const result = await Book.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};

// Route for Delete a book
export const deleteBook = async(req, res) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
};


// export default {
//   createBook,
//   getAllBooks,
//   getBook,
//   updateBook,
//   deleteBook,
// }