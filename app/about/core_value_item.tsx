import React from "react";
import { CoreValue } from "../types/core_value";
import {
  Car,
  CreditCard,
  Headset,
  Leaf,
  LucideIcon,
  MessageCircle,
  Proportions,
  Shield,
  ShieldCheck,
  Sprout,
  Tag,
  Wrench,
} from "lucide-react";

const CoreValueItem = ({
  value,
  iconLeft = true,
  className,
  iconColor,
}: {
  value: CoreValue;
  iconLeft?: boolean;
  className?: string;
  iconColor?: string;
}) => {
  const valueIcons: Record<CoreValue["icon"], LucideIcon> = {
    proportions: Proportions,
    headset: Headset,
    shieldcheck: ShieldCheck,
    sprout: Sprout,
    message: MessageCircle,
    wrench: Wrench,
    shield: Shield,
    creditcard: CreditCard,
    tag: Tag,
    car: Car,
  };

  const ValueIcon = valueIcons[value.icon];

  return (
    <div
      className={`rounded-lg p-8 h-full text-black `}
      style={{ backgroundColor: value.color }}
    >
      <div
        className="flex"
        style={{ justifyContent: iconLeft ? "flex-start" : "flex-end" }}
      >
        <div
          className={`p-2 shadow shadow-sm w-10 h-10 flex justify-center items-center ${className}`}
        >
          <ValueIcon color={iconColor ? iconColor : "#ffffff"} />
        </div>
      </div>
      <p className="font-bold text-xl my-4">{value.title}</p>
      <p className="text-gray-500">{value.description}</p>
    </div>
  );
};

export default CoreValueItem;
