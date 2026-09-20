"use client";

import React from "react";
import { QuickAction } from "../types/quick_action";
import {
  ArrowRight,
  Calendar,
  FileText,
  LucideIcon,
  MapPin,
  Shield,
} from "lucide-react";
import Link from "next/link";

const QuickActionCard = ({ action }: { action: QuickAction }) => {
  const Icons: Record<QuickAction["icon"], LucideIcon> = {
    document: FileText,
    shield: Shield,
    location: MapPin,
    calendar: Calendar,
  };

  const ActionIcon: LucideIcon = Icons[action.icon];

  return (
    <Link
      href={action.link}
      className="flex flex-col bg-gray-100 shadow-md rounded-xl p-6 w-full h-full min-h-[260px] transition-all hover:scale-[1.02] hover:shadow-lg"
    >
      <div>
        <div className="flex justify-between items-center">
          <div className="p-2 bg-gray-200 rounded-lg">
            <ActionIcon className="h-6 w-6 text-gray-700" />
          </div>
          <ArrowRight className="text-gray-500 h-5 w-5" />
        </div>

        <h4 className="font-bold text-2xl mt-4 text-gray-900 line-clamp-1">
          {action.title}
        </h4>
      </div>

      <div className="flex-grow flex items-end">
        <p className="text-gray-500 text-sm line-clamp-3 w-full">
          {action.description}
        </p>
      </div>
    </Link>
  );
};

export default QuickActionCard;
