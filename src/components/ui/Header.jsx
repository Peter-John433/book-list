import { Component } from "react";
import { UseBook } from "../../../store/UseBook";
class Header extends Component {
  static contextType = UseBook;

  render() {
    const { books } = this.context;

    return (
      <div className="header">
        <nav className="header-h1">
          <h1>Doja Books list</h1>
          <p>
            you currently have{" "}
            <span className="book-list-header">{books.length}</span> in your
            list to read
          </p>
        </nav>
      </div>
    );
  }
}

export default Header;
