import { ComponentStory } from "@storybook/react";

import { Text } from ".";

import { TextProps, TagsVariantEnum, ColorsVariantEnum } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "heading_1",
        "heading_2",
        "heading_3",
        "heading_4",
        "heading_5",
        "subtitle_m",
        "subtitle_s",
        "body_l",
        "body_m",
        "caption",
      ],
    },
    color: {
      control: {
        type: "select",
      },
      options: [
        "black",
        "dark_grey",
        "grey",
        "light_grey",
        "bg",
        "profile_block",
        "main",
        "red",
        "green",
        "orange",
      ],
    },
  },
};

const Template: ComponentStory<(Props: TextProps) => JSX.Element> = ({
  ...args
}) => {
  return (
    <>
      <Text {...args} />
    </>
  );
};

export const text = Template.bind({});
text.args = {
  text: "some text",
  variant: TagsVariantEnum.heading_1,
  color: ColorsVariantEnum.main,
};
