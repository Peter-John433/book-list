import { useContext } from "react";
import { UseBook } from "../../../store/UseBook";
const BookLists = () => {
  const { books, deleteBook } = useContext(UseBook);
  return (
    <>
      {books.map((book) => (
        <li
          onClick={() => deleteBook(book.id)}
          key={book.id}
          className="book-list"
        >
          {book.title}- {book.author}
        </li>
      ))}
    </>
  );
};

export default BookLists;
