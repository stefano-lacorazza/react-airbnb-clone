import React from 'react';


export type Option = {
  label: string;
  value: string;
};

export interface DropdownSelectProps {
  options: Option[];
  datatestid: string;
  text: string;
  name: string;
  OnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options, datatestid,text, name, OnChange }) => {
  return (
    <label className='select'>
      <span className='visually-hidden'>{text}</span>
      <select data-test-id = {datatestid} name = {name} onChange={OnChange}>
        {options.map((options) => (
          <option value={options.value}>
            {options.label}
          </option>
        ))}
      </select>
    </label>

    

  );
};

export default DropdownSelect;