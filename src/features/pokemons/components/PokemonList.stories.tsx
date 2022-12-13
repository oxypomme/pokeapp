import { BrowserRouter } from "react-router-dom";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { Pokemon } from "..";
import pokemons from "../pokemons.json";
import PokemonList from "./PokemonList";

export default {
  title: "Pokemons/PokemonList",
  component: PokemonList,
} as ComponentMeta<typeof PokemonList>;

const Template: ComponentStory<typeof PokemonList> = (args) => (
  <BrowserRouter>
    <PokemonList {...args} />
  </BrowserRouter>
);

export const EmptyList = Template.bind({});

export const FullList = Template.bind({});
FullList.args = {
  pokemons: pokemons as Pokemon[],
};

export const Loading = Template.bind({});
Loading.args = {
  loadingItems: pokemons.length,
};
