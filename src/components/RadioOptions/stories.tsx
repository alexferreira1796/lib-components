import { RadioOptions, RadioOptionsProps } from ".";

export default {
  title: "RadioOptions",
  component: RadioOptions,
  argTypes: {
    selected: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args: RadioOptionsProps) => <RadioOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: 3,
  setSelected: () => {},
};
