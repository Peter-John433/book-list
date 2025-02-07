import { useContext } from "react";
import { UseBook } from "../../../store/UseBook";

const Button = () => {
  const { addBooks } = useContext(UseBook);
  return <button onClick={addBooks}>add books</button>;
};

export default Button;
