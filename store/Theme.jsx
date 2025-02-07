import { Component, createContext } from "react";

//let's create a context for the our provider
export const Theme = createContext();

class ThemeProvider extends Component {
  state = {
    isLight: true,
    dark: { bg: "#fff", textColor: "#000" },
    light: { bg: "#000", textColor: "#fff" },
  };
  render() {
    return (
      <Theme.Provider value={{ ...this.state }}>
        {this.props.children}
      </Theme.Provider>
    );
  }
}

export default ThemeProvider;
