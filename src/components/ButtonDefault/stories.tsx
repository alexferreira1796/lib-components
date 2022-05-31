import ButtonDefault, { ButtonDefaultProps } from ".";

import { Check } from "assets/icons";

export default {
  title: "ButtonDefault",
  component: ButtonDefault,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
    icon: {
      control: {
        type: "text",
      },
    },
    bgColor: {
      control: {
        type: "color",
      },
    },
    color: {
      control: {
        type: "color",
      },
    },
    width: {
      control: {
        type: "number",
      },
    },
    height: {
      control: {
        type: "number",
      },
    },
  },
};

const Template = (args: ButtonDefaultProps) => <ButtonDefault {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Comprar agora",
  width: 370,
  height: 80,
  icon: Check,
  size: 28,
};
