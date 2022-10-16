import { ComponentStory } from '@storybook/react';

import { Input } from '.';

import { InputProps } from './Input.types';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['text', 'password', 'email', 'date', 'currency'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['M', 'L'],
    },
    error: {
      control: {
        type: 'text',
      },
      options: [''],
    },
    label: {
      control: {
        type: 'text',
      },
      options: [''],
    },
    placeholder: {
      control: {
        type: 'text',
      },
      options: [''],
    },
  },
};

const Template: ComponentStory<(Props: InputProps) => JSX.Element> = ({
  ...args
}) => {

  return (
    <>
      <Input {...args}/>
    </>
  );
};

export const input = Template.bind({});
input.args = {
  type: 'text',
  size: 'L',
  label: '',
  error: '',
  placeholder: '',
};