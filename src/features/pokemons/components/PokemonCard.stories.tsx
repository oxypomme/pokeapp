import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { Pokemon } from "..";
import pokemons from "../pokemons.json";
import PokemonCard from "./PokemonCard";

export default {
  title: "Pokemons/PokemonCard",
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Pikachu = Template.bind({});
Pikachu.args = {
  pokemon: pokemons[0] as Pokemon,
};

export const Charmander = Template.bind({});
Charmander.args = {
  pokemon: pokemons[1] as Pokemon,
};
