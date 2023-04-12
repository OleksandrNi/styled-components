import React, { useState, useRef } from 'react';
import { SideModalProps } from './SideModal.types';
import classNames from "classnames";

import styles from "./SideModal.module.scss";

export const SideModalComponent: React.FC<SideModalProps> = ({
  variant,
  children,
}) => {
  const sideModalClass = classNames(
    styles.side_modal,
    {
    [styles[`side_modal_${variant}`]]: variant,

  },
  );

  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleCloseModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add(styles[`hide_modal_${variant}`]);
      setTimeout(() => setIsVisible(false), 1000);
    }
  };

  return (
    <>
      <button onClick={isVisible ? handleCloseModal : handleOpenModal}>{isVisible ? 'Закрыть модальное окно' : 'Открыть модальное окно'}</button>
      {isVisible && (
        <div
          className={sideModalClass}
          onClick={handleCloseModal}
          ref={modalRef}
        >
          {children}
        </div>
      )}
    </>
  );
};
