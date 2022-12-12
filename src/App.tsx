import { useState } from "react";
import classnames from "classnames";

import reactLogo from "./assets/react.svg";
import PokemonForm from "./features/pokemons/components/PokemonForm";
import PokemonList from "./features/pokemons/components/PokemonList";

import "./globals.scss";
// import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <h1>PokeApp</h1>
      <p>List of pokemons</p>
      <PokemonList />
      <PokemonForm />
    </div>
  );
}

export default App;
