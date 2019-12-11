import React from "react";
import "./App.css";
import routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import amber from "@material-ui/core/colors/amber";
import blueGrey from "@material-ui/core/colors/blueGrey";

import Header from "./components/Header/Header";

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: amber
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {routes}
      </div>
    </ThemeProvider>
  );
}

export default App;
