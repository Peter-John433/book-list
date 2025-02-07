//global state
import ThemeProvider from "../store/Theme";
import UseBookProvider from "../store/UseBook";
//components
import Books from "./components/books/Books";
import Header from "./components/ui/Header";

function App() {
  return (
    <div>
      <ThemeProvider>
        <UseBookProvider>
          <Header />
          <Books />
        </UseBookProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
