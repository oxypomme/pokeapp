import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { PokedexProvider } from "./features/pokemons/PokedexContext";
import { ThemeProvider } from "./features/themes/ThemeContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <PokedexProvider>
          <App />
        </PokedexProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
