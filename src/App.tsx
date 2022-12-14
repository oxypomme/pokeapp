import { FaMoon, FaSun } from "react-icons/fa";
import { NavLink, Route, Routes } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import logo from "/pokeball.svg";

import PokemonCollectionCount from "./features/pokemons/components/PokemonCollectionCount";
import PokemonCapturedPage from "./features/pokemons/routes/PokemonCapturedPage";
import PokemonCreationPage from "./features/pokemons/routes/PokemonCreationPage";
import PokemonDetailsPage from "./features/pokemons/routes/PokemonDetailsPage";
import PokemonListPage from "./features/pokemons/routes/PokemonListPage";
import { useThemeContext } from "./features/themes/ThemeContext";

import classes from "./App.module.scss";

function App() {
  const { setTheme, current: currentTheme } = useThemeContext();

  const handlerTheme = () => {
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={classes.appRoot}>
      <header className={classes.header}>
        <div>
          <img src={logo} alt="logo" height={64} />
          <h1>PokeApp</h1>
        </div>
        <nav className={classes.nav}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokemons">
            Collection (<PokemonCollectionCount />)
          </NavLink>
          <NavLink to="/pokemons/new">New pokemon</NavLink>
          <button onClick={handlerTheme}>
            {currentTheme === "dark" ? <FaMoon /> : <FaSun />}
          </button>
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
