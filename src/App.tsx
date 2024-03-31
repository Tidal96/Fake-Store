import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Homepage from "./Components/Homepage";
import { createTheme } from "@mui/material";
function App() {
  const them = createTheme({
    palette: {
      primary: { main: "#eec615" },
    },
  });
  return (
    <>
      <ThemeProvider theme={them}>
        <Homepage></Homepage>
      </ThemeProvider>
    </>
  );
}

export default App;
