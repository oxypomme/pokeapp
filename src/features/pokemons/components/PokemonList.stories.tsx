import { BrowserRouter } from "react-router-dom";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import PokemonList from "./PokemonList";

export default {
  title: "Pokemons/PokemonList",
  component: PokemonList,
} as ComponentMeta<typeof PokemonList>;

const Template: ComponentStory<typeof PokemonList> = () => (
  <BrowserRouter>
    <PokemonList />
  </BrowserRouter>
);

export const List = Template.bind({});
