import { ThemeProvider } from "@mui/material";
import "./App.css";
import { createContext, useState } from "react";
import Homepage from "./Components/Pages/Homepage";
import { createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Pages/LoginPage";
import Cart from "./Components/Pages/Cart";
import Product from "./Components/Pages/Product";
export const appContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "rgba(243, 157, 18, 0.76)" },
    },
  });

  return (
    <appContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
