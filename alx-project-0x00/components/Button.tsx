import React from "react";
import { ButtonProps } from "../interfaces";

const Button: React.FC<ButtonProps> = ({ title, style }) => {
  return (
    <button
      className={`px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 transition ${style}`}
    >
      {title}
    </button>
  );
};

export default Button;
