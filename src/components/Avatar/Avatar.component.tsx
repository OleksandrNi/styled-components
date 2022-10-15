import React from 'react';
import classNames from 'classnames';

import styles from './Avatar.module.scss';

import { AvatarProps } from './Avatar.types';

export const AvatarComponent: React.FC<AvatarProps> = ({
  variant,
  text,
  color,
}) => {
  const avatarClass = classNames(
    {
      [styles[`avatar_${variant}`]]: variant,
      [styles[`avatar_colors_${color}`]]: color,
    },
  );

  return (
    <div className={avatarClass}>
      {text}
    </div>
  );
};

AvatarComponent.displayName = 'Avatar';