import { useContext } from "react";
import { UseBook } from "../../../store/UseBook";
import BookLists from "../books/BookLists";
import Button from "../buttons/Button";
import Form from "../Form";

const Books = () => {
  const { books } = useContext(UseBook);
  return (
    <div className="books">
      <ul>
        <BookLists books={books} />
        <Form />
        <Button />
      </ul>
    </div>
  );
};

export default Books;
