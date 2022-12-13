import type { ComponentMeta, ComponentStory } from "@storybook/react";

import InputControl from "./InputControl";

export default {
  title: "Common/InputControl",
  component: InputControl,
  argTypes: {
    required: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof InputControl>;

const Template: ComponentStory<typeof InputControl> = (args) => (
  <InputControl {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: "Name",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  label: "Name",
  placeholder: "oxypomme",
};

export const Required = Template.bind({});
Required.args = {
  label: "Name",
  required: true,
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  type: "password",
};
