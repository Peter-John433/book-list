import UseBookProvider from "../store/UseBook";
import Books from "./components/books/Books";
import Header from "./components/ui/Header";

function App() {
  return (
    <div>
      <UseBookProvider>
        <Header />
        <Books />
      </UseBookProvider>
    </div>
  );
}

export default App;
