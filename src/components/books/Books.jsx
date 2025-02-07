import { useContext } from "react";
import { UseBook } from "../../../store/UseBook";
import BookLists from "../books/BookLists";
import Form from "../Form";
import NoBooks from "./NoBooks";

const Books = () => {
  const { books } = useContext(UseBook);
  return (
    <div className="books">
      <ul>
        {books.length ? <BookLists books={books} /> : <NoBooks />}
        <Form />
      </ul>
    </div>
  );
};

export default Books;
