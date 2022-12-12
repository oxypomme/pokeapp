import { NavLink, Route, Routes } from "react-router-dom";

import PokemonForm from "./features/pokemons/components/PokemonForm";
import PokemonList from "./features/pokemons/components/PokemonList";
import PokemonDetailsPage from "./routes/PokemonDetailsPage";

import "./globals.scss";
import classes from "./App.module.scss";

function App() {
  return (
    <div>
      <h1>PokeApp</h1>
      <nav className={classes.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pokemons/new">New pokemon</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemons" element={<PokemonList />} />
        <Route path="/pokemons/new" element={<PokemonForm />} />
        <Route path="/pokemons/:name" element={<PokemonDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
