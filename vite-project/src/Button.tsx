import React, {  } from 'react';

interface ButtonProps {
    children: React.ReactNode; 
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    // function handleClick() {
    //     console.log("1")
    // }
  return (
    <button onClick={onClick}>{children}</button>
  );
};

export default Button;