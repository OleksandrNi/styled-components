import { useState } from "react";
import { ComponentStory } from "@storybook/react";

import { Modal } from ".";

import { ModalProps } from "./Modal.types";
import { Text } from "@components/Text";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    label: {
      control: {
        isOpen: false,
      },
      options: [false, true],
    },
  },
};

const Template: ComponentStory<(Props: ModalProps) => JSX.Element> = ({
  ...args
}) => {
  const [isShowModal, seIsShowModal] = useState(false);
  return (
    <>
      <button onClick={() => seIsShowModal(true)}>showModal</button>
      {isShowModal && (
        <Modal {...args} setIsOpen={() => seIsShowModal(!isShowModal)}>
          <Text variant={"heading_1"} color={"main"} text={"Modal content"} />
        </Modal>
      )}
    </>
  );
};

export const modal = Template.bind({});
modal.args = {};
