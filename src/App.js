import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import PermanentDrawer from "./components/drawer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: "Comfortaa, cursive",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <PermanentDrawer />
    </ThemeProvider>
  );
}

export default App;
