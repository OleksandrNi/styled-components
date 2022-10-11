import React from 'react';
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

import { IconsEnum, SvgIconProps } from './SvgIcon.types';

import styles from './SvgIcon.module.scss';

export const SvgIconComponent: React.FC<SvgIconProps> = ({
  src,
  size = 24,
  color = 'inherit',
  rotate,
  className,
  style,
  onClick,
  defaultStroke,
}) => {
  const svgIconClass = classNames(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
      [styles.defaultStroke]: defaultStroke,
    },
    className
  );

  const stroke = defaultStroke
    ? {}
    : {
        stroke: `var(--${color})`,
      };

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
    ...stroke,
  };

  console.log(IconsEnum.loader)

  return (
    <ReactSVG
      src={src}
      className={svgIconClass}
      onClick={onClick}
      style={customStyles}
    />
  );
};

SvgIconComponent.displayName = 'SvgIcon';
