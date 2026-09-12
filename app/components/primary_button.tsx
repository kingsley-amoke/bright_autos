import React from "react";
import { primaryColor } from "../colors/colors";

const PrimaryButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`bg-${primaryColor} cursor-pointer text-white px-4 py-2 rounded hover:bg-${primaryColor}-600 ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
