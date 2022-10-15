import React from 'react';
import classNames from 'classnames';

import { TextProps } from './Text.types';

import styles from './Text.module.scss';
import { tags } from './Text.constants';

export const TextComponent: React.FC<TextProps> = ({
  variant,
  text,
  color,
}) => {
  const textClass = classNames(
    styles.text,
    {
      [styles[`text_${variant}`]]: variant,
      [styles[`text_colors_${color}`]]: color,
    },
  );

  const Tag = `${tags[variant]}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={textClass}>{text}</Tag>
  );
};

TextComponent.displayName = 'Text';