import { useContext, useState } from "react";
import { UseBook } from "../../store/UseBook";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const { addBooks } = useContext(UseBook);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        required
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
