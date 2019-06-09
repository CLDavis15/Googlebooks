import axios from "axios";

export default {
  // Gets all books
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  searchBook: (_id) => {
    return axios.get("/search" + _id);
  },
  // Deletes the book with the given id
  deleteBook: (_id) => {
    return axios.delete("/api/books/" + _id);
  },
  // Saves a book to the database
  addBook: (bookData) => {
    return axios.post("/api/books", bookData);
  }
};
