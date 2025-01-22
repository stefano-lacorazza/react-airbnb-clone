import React from 'react';

type ButtonProps = {
  onClick: () => void;
  text: string;
  className?: string;
  datatestid: string
};

const Button: React.FC<ButtonProps> = ({ onClick, text, className, datatestid}) => {
  return (
    <button onClick={onClick} className={className} data-test-id = {datatestid} type = 'submit'>
      {text}
    </button>
  );
};

export default Button;