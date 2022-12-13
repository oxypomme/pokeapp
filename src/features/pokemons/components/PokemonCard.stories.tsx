import { BrowserRouter } from "react-router-dom";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { Pokemon } from "..";
import { PokedexProvider } from "../PokedexContext";
import pokemons from "../pokemons.json";
import PokemonCard from "./PokemonCard";

export default {
  title: "Pokemons/PokemonCard",
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <BrowserRouter>
    <PokedexProvider>
      <PokemonCard {...args} />
    </PokedexProvider>
  </BrowserRouter>
);

export const Pikachu = Template.bind({});
Pikachu.args = {
  pokemon: pokemons[0] as Pokemon,
};

export const Charmander = Template.bind({});
Charmander.args = {
  pokemon: pokemons[1] as Pokemon,
};
