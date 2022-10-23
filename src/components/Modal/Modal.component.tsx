import { Button } from "@components/Button";
import React from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.scss";
import { ModalProps } from "./Modal.types";

export const ModalComponent: React.FC<ModalProps> = ({
  setIsOpen,
  children,
}) => {
  return ReactDom.createPortal(
    <>
      <div className={styles.modal__overlay}></div>
      <div className={styles.modal}>
        <Button text={"close modal"} onClick={() => setIsOpen(false)} />
        {children}
      </div>
    </>,
    document.getElementById("root") as HTMLDivElement
  );
};

ModalComponent.displayName = "Modal";
