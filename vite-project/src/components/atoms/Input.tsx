// src/components/atoms/Input.tsx
import React from 'react';

interface InputProps {  
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-4 py-2 w-full mt-2"
    />
  );
};

export default Input;
