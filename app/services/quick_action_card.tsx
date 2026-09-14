import React from "react";
import { QuickAction } from "../types/quick_action";
import { ArrowRight, Leaf } from "lucide-react";

const QuickActionCard = ({ action }: { action: QuickAction }) => {
  return (
    <div className=" bg-gray-100 shadow-md rounded-xl p-4">
      <div className="flex justify-between items-center">
        <div className="p-2 bg-gray-300 rounded-sm  ">
          <Leaf />
        </div>
        <ArrowRight className="text-gray-500" />
      </div>
      <h4 className="font-bold text-2xl my-4">{action.title}</h4>
      <p className="text-gray-500">{action.description}</p>
    </div>
  );
};

export default QuickActionCard;
