import { NavLink, Route, Routes } from "react-router-dom";

import PokemonCollectionCount from "./features/pokemons/components/PokemonCollectionCount";
import PokemonCapturedPage from "./routes/PokemonCapturedPage";
import PokemonCreationPage from "./routes/PokemonCreationPage";
import PokemonDetailsPage from "./routes/PokemonDetailsPage";
import PokemonListPage from "./routes/PokemonListPage";

import "./globals.scss";
import classes from "./App.module.scss";

function App() {
  return (
    <div>
      <header style={{ marginBottom: "2rem" }}>
        <h1>PokeApp</h1>
        <nav className={classes.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemons">
            Collection (<PokemonCollectionCount />)
          </NavLink>
          <NavLink to="/pokemons/new">New pokemon</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PokemonListPage />} />
          <Route path="/pokemons" element={<PokemonCapturedPage />} />
          <Route path="/pokemons/new" element={<PokemonCreationPage />} />
          <Route path="/pokemons/:name" element={<PokemonDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
