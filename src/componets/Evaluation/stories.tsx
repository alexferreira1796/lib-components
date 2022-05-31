import Evaluation, { EvaluationProps } from ".";

export default {
  title: "Evaluation",
  component: Evaluation,
  argTypes: {
    note: {
      control: {
        type: "number",
      },
    },
    withNumber: {
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args: EvaluationProps) => <Evaluation {...args} />;

export const Default = Template.bind({});
Default.args = {
  note: 3.2,
  withNumber: false,
};
