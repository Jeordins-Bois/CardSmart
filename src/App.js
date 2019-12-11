import React from "react";
import "./App.css";
import routes from "./routes";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, blueGrey, grey} from "@material-ui/core/colors";

import Header from "./components/Header/Header";
import AddPreview from './components/Footer/AddPreview'

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: teal,
    accent: grey
  }
});

function App() {
  console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        {routes}
        <AddPreview />
      </div>
    </ThemeProvider>
  );
}

export default App;
