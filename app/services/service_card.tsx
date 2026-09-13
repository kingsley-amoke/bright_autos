import React from "react";
import { Service } from "../types/service";
import { backgroundColor } from "../colors/colors";

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="w-full max-w-xl rounded-xl text-gray-600 shadow-lg ">
      <div
        className="p-8 rounded-t-xl text-white"
        style={{ backgroundColor: service.color }}
      >
        <p className="uppercase text-sm">{service.tagline}</p>
        <h3 className="capitalize text-bold text-lg">{service.title}</h3>
      </div>
      <div className="flex flex-col gap-12 p-8">
        <p>{service.description}</p>
        <div>
          {service.items.map((i) => (
            <p key={i}>{i}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
