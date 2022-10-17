import { ComponentStory } from '@storybook/react';

import { Checkbox } from '.';

import { CheckboxProps } from './Checkbox.types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      options: [''],
    },
  },
};

const Template: ComponentStory<(Props: CheckboxProps) => JSX.Element> = ({
  ...args
}) => {

  return (
    <>
      <Checkbox {...args}/>
    </>
  );
};

export const checkbox = Template.bind({});
checkbox.args = {
  isShowLabel: true,
  label: '',
};