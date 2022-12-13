import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Paginator from "./Paginator";

export default {
  title: "Common/Paginator",
  component: Paginator,
  argTypes: { onChange: { action: "changed" } },
} as ComponentMeta<typeof Paginator>;

const Template: ComponentStory<typeof Paginator> = (args) => (
  <Paginator {...args} />
);

export const One = Template.bind({});
One.args = {
  count: 1,
  current: 1,
};

export const Start = Template.bind({});
Start.args = {
  count: 10,
  current: 2,
};

export const Middle = Template.bind({});
Middle.args = {
  count: 10,
  current: 5,
};

export const End = Template.bind({});
End.args = {
  count: 10,
  current: 9,
};
