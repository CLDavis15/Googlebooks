import axios from "axios";

export default {
  // Gets all books
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  searchBook: (id) => {
    return axios.get("/search" + id);
  },
  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  addBook: (bookData) => {
    return axios.post("/api/books", bookData);
  }
};
