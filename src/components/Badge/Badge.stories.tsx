import { ComponentStory } from '@storybook/react';

import { Badge } from '.';

import { BadgeProps } from './Badge.types';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['popular', 'new', 'not_available', 'comp_position', 'active', 'not_active', 'deactivated', 'in_process', 'for_approval', 'completed', 'not_published', 'recomended'],
    },
  },
};

const Template: ComponentStory<(Props: BadgeProps) => JSX.Element> = ({
  ...args
}) => {

  return (
    <>
      <Badge {...args}/>
    </>
  );
};

export const badge = Template.bind({});
badge.args = {
  variant: 'popular',
};