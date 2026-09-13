import React from "react";

const SecondaryButton = ({
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
      className={`bg-gray-100 text-gray-800 px-4 py-2 rounded ${className || null}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
