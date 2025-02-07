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
  return (
    <UseBook.Provider value={{ books }}>{props.children}</UseBook.Provider>
  );
};

export default UseBookProvider;
