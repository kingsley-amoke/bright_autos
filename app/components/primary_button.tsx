import React from "react";
import { primaryColor } from "../colors/colors";

const PrimaryButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="cursor-pointer">
      <button
        className={`bg-${primaryColor} text-white px-4 py-2 rounded hover:bg-${primaryColor}-600 ${className || ""}`}
      >
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
