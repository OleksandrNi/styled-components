import { ComponentStory } from "@storybook/react";

import { RadioButton } from ".";

import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      options: [""],
    },
  },
};

const Template: ComponentStory<(Props: RadioButtonProps) => JSX.Element> = ({
  ...args
}) => {
  return (
    <>
      <RadioButton {...args} />
    </>
  );
};

export const radioButton = Template.bind({});
radioButton.args = {
  isShowLabel: true,
  label: "",
  id: "one"
};
