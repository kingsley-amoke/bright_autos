import React from "react";

const ServicesStats = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col md:flex-row gap-12 my-32">
      <div className="items-center justify-center flex flex-col">
        <p className="font-bold text-3xl">10+</p>
        <p>Years in business</p>
      </div>
      <div className="items-center justify-center flex flex-col">
        <p className="font-bold text-3xl">25,500</p>
        <p>Vehicles Serviced</p>
      </div>
      <div className="items-center justify-center flex flex-col">
        <p className="font-bold text-3xl">5,300+</p>
        <p>Happy Customers</p>
      </div>
      <div className="items-center justify-center flex flex-col">
        <p className="font-bold text-3xl">98%</p>
        <p>Satisfaction rate</p>
      </div>
    </div>
  );
};

export default ServicesStats;
