import React from "react";
import { CoreValue } from "../types/core_value";
import {
  Headset,
  Leaf,
  LucideIcon,
  Proportions,
  ShieldCheck,
  Sprout,
} from "lucide-react";

const CoreValueItem = ({
  value,
  iconLeft = true,
}: {
  value: CoreValue;
  iconLeft?: boolean;
}) => {
  const valueIcons: Record<CoreValue["icon"], LucideIcon> = {
    proportions: Proportions,
    headset: Headset,
    shield: ShieldCheck,
    sprout: Sprout,
  };

  const ValueIcon = valueIcons[value.icon];

  return (
    <div
      className=" rounded-lg p-8 h-full text-black"
      style={{ backgroundColor: value.color }}
    >
      <div
        className="flex"
        style={{ justifyContent: iconLeft ? "flex-start" : "flex-end" }}
      >
        <div className="rounded-full p-2 shadow shadow-sm w-10 h-10 flex justify-center items-center">
          <ValueIcon />
        </div>
      </div>
      <p className="font-bold text-xl my-4">{value.title}</p>
      <p className="text-gray-500">{value.description}</p>
    </div>
  );
};

export default CoreValueItem;
