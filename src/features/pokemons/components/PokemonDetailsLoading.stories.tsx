import type { ComponentMeta, ComponentStory } from "@storybook/react";

import PokemonDetailsLoading from "./PokemonDetailsLoading";

export default {
  title: "Pokemons/PokemonDetailsLoading",
  component: PokemonDetailsLoading,
} as ComponentMeta<typeof PokemonDetailsLoading>;

const Template: ComponentStory<typeof PokemonDetailsLoading> = () => (
  <PokemonDetailsLoading />
);

export const Loading = Template.bind({});
