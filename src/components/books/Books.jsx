import { useContext } from "react";
import { UseBook } from "../../../store/UseBook";
import BookLists from "../books/BookLists";

const Books = () => {
  const { books } = useContext(UseBook);
  return (
    <div className="books">
      <ul>
        <BookLists books={books} />
      </ul>
    </div>
  );
};

export default Books;
