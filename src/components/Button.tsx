import React from "react";

interface IButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#353EAB] w-auto text-white px-8 py-4 rounded-xl  inline-block"
    >
      {children}
    </button>
  );
};

export default Button;
