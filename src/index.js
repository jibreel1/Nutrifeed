import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
   typography: {
      fontFamily: "Sora, sans-serif",
   },
});

root.render(
   <ThemeProvider theme={theme}>
      <App />
   </ThemeProvider>
);
