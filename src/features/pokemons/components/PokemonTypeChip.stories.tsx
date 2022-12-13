import type { ComponentMeta, ComponentStory } from "@storybook/react";

import PokemonTypeChip from "./PokemonTypeChip";

export default {
  title: "Pokemons/PokemonTypeChip",
  component: PokemonTypeChip,
} as ComponentMeta<typeof PokemonTypeChip>;

const Template: ComponentStory<typeof PokemonTypeChip> = (args) => (
  <PokemonTypeChip {...args} />
);

export const Fire = Template.bind({});
Fire.args = {
  type: "fire",
};

export const Grass = Template.bind({});
Grass.args = {
  type: "grass",
};
