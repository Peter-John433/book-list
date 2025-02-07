import { useState, createContext } from "react";

export const UseBook = createContext();

const UseBookProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Atomic Habits", author: "James Clear", id: 1 },
    {
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      id: 2,
    },
    { title: "The Power of Now", author: "Eckhart Tolle", id: 3 },
    { title: "Deep Work", author: "Cal Newport", id: 4 },
  ]);

  const id = crypto.randomUUID();

  const addBooks = (title, author) => {
    setBooks([...books, { title, author, id: id }]);
  };
  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <UseBook.Provider value={{ books, addBooks, deleteBook }}>
      {props.children}
    </UseBook.Provider>
  );
};

export default UseBookProvider;
