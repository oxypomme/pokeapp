import type { ComponentMeta, ComponentStory } from "@storybook/react";

import PokemonCardLoading from "./PokemonCardLoading";

export default {
  title: "Pokemons/PokemonCardLoading",
  component: PokemonCardLoading,
} as ComponentMeta<typeof PokemonCardLoading>;

const Template: ComponentStory<typeof PokemonCardLoading> = () => (
  <PokemonCardLoading />
);

export const Loading = Template.bind({});
