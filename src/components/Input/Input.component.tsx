import { useState } from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const InputComponent: React.FC<InputProps> = ({
  type = 'text', label, error = '', size = 'M'
}) => {
  const [value, setValue] = useState('');
  let placeholder = '';

  if (type === 'currency') {
    label = ''
    placeholder = 'placeholder'
  }

  if(type === 'date') {
    label = ''
  }

  const inputClass = classNames(
    styles.input_container,
    {
      [styles[`input_container_error`]]: error,
      [styles[`input_container_size_${size}`]]: size,
    },
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <>
      <div className={inputClass}>
        <input type={type} value={value} onChange={handleChange} placeholder={placeholder}/>
        <label className={value && styles.filled}>
          {label}
        </label>
      </div>
      <div style={{color: '#D82045', marginTop: '6px', fontSize: '12px'}}>{error}</div>
    </>
  );
};

InputComponent.displayName = 'Input';