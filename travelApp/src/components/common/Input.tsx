import React from 'react';

interface InputProps {
  type: string;
  name: string;
  datatestid: string;
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, datatestid, text, onChange }) => {
  return (
    <label className='input'>
      <span className='input__heading'>{text}</span>
      <input data-test-id={datatestid} className = 'button' type={type} name={name} onChange={onChange} required/>

    </label>
  );
};

export default Input;