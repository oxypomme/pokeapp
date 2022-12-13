import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { Pokemon } from "..";
import pokemons from "../pokemons.json";
import PokemonDetails from "./PokemonDetails";

export default {
  title: "Pokemons/PokemonDetails",
  component: PokemonDetails,
} as ComponentMeta<typeof PokemonDetails>;

const Template: ComponentStory<typeof PokemonDetails> = (args) => (
  <PokemonDetails {...args} />
);

export const Pikachu = Template.bind({});
Pikachu.args = {
  pokemon: pokemons[0] as Pokemon,
};

export const Charmander = Template.bind({});
Charmander.args = {
  pokemon: pokemons[1] as Pokemon,
};
