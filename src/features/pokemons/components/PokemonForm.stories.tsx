import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import PokemonForm from "./PokemonForm";

export default {
  title: "Pokemons/PokemonForm",
  component: PokemonForm,
  argTypes: { onSubmit: { action: "submitted" } },
} as ComponentMeta<typeof PokemonForm>;

const Template: ComponentStory<typeof PokemonForm> = (args) => (
  <PokemonForm {...args} />
);

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // 👇 Simulate interactions with the component
  await userEvent.type(canvas.getByLabelText("Name"), "charrmelon");

  await userEvent.type(canvas.getByLabelText("Type"), "fire");

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole("button"));

  // 👇 Assert DOM structure
  // await expect(
  //   canvas.getByText(
  //     "Everything is perfect. Your account is ready and we should probably get you started!"
  //   )
  // ).toBeInTheDocument();
};
