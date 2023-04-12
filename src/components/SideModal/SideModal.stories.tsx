import { ComponentStory } from "@storybook/react";

import { SideModal } from ".";

import { SideModalProps } from "./SideModal.types";
import { Text } from "@components/Text";

export default {
  title: "Components/SideModal",
  component: SideModal,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["left", "right"],
    },
  },
};

const Template: ComponentStory<(Props: SideModalProps) => JSX.Element> = ({
  ...args
}) => {
  return (
    <>
      <SideModal {...args}>
        <Text variant={"heading_1"} color={"main"} text={"Modal content"} />
      </SideModal>
    </>
  );
};

export const sideModal = Template.bind({});
sideModal.args = {
  variant: 'left',
};
