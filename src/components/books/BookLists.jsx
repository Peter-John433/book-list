import { useContext } from "react";
import { UseBook } from "../../../store/UseBook";
const BookLists = () => {
  const { books } = useContext(UseBook);
  return (
    <>
      {books.map((book) => (
        <li key={book.id} className="book-list">
          {book.title}- {book.author}
        </li>
      ))}
    </>
  );
};

export default BookLists;
