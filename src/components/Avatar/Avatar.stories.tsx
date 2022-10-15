import { ComponentStory } from '@storybook/react';

import { Avatar } from '.';

import { AvatarProps, AvatarVariantEnum, ColorsVariantEnum } from './Avatar.types';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['size_s', 'size_M', 'size_L'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['black', 'dark_grey', 'grey', 'light_grey', 'bg', 'profile_block', 'main', 'red', 'green', 'orange'],
    },
  },
};

const Template: ComponentStory<(Props: AvatarProps) => JSX.Element> = ({
  ...args
}) => {

  return (
    <>
      <Avatar {...args}/>
    </>
  );
};

export const avatar = Template.bind({});
avatar.args = {
  text: 'AH',
  variant: AvatarVariantEnum.size_M,
  color: ColorsVariantEnum.main,
};