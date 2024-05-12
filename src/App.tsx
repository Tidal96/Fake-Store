import { ThemeProvider } from "@mui/material";
import "./App.css";
import { createContext, useState } from "react";
import Homepage from "./Components/Homepage";
import { createTheme } from "@mui/material";
export const appContext= createContext({darkMode:false, toggleDarkMode:()=>{}})
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <appContext.Provider value={{darkMode,toggleDarkMode}}>
      <ThemeProvider theme={theme}>
        <Homepage>
          
        </Homepage>
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
