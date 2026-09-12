"use client";

import Image from "next/image";
import { Gauge, Cpu, SlidersHorizontal, ArrowRight } from "lucide-react";
import { Car } from "../types/car";
import PrimaryButton from "./primary_button";
import { useRouter } from "next/navigation";

export default function CarCard({ car }: { car: Car }) {
  const router = useRouter();

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-3xl border border-slate-800 bg-[#111827] shadow-xl shadow-black/30">
      <div className="relative aspect-[4/3] w-full">
        <Image
          priority
          src={car.image}
          alt={car.model}
          fill
          sizes="(max-width: 480px) 100vw, 384px"
          className="object-cover"
        />
      </div>

      <div className="px-6 pb-6 pt-5">
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full  px-3 py-1 text-xs font-semibold tracking-wide  uppercase`}
            style={{
              backgroundColor: `${car.type.color}20`,
              color: car.type.color,
            }}
          >
            <car.type.icon className="h-3.5 w-3.5" strokeWidth={2.5} />
            {car.type.name}
          </span>

          <span className="text-xs font-medium tracking-wide text-slate-400 uppercase">
            Brightson certified
          </span>
        </div>

        <h3 className="text-2xl font-bold leading-tight text-white">
          {car.title}
        </h3>
        <p className="mt-2 text-3xl font-extrabold text-orange-500">
          {`$${car.price.toLocaleString()}`}
        </p>

        <div className="mt-5 flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl bg-[#0b1220] px-4 py-3.5">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Gauge className="h-4 w-4 text-slate-400" strokeWidth={2} />
            <span>{car.mileage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <Cpu className="h-4 w-4 text-slate-400" strokeWidth={2} />
            <span>{car.engine}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <SlidersHorizontal
              className="h-4 w-4 text-slate-400"
              strokeWidth={2}
            />
            <span>{car.transmission}</span>
          </div>
        </div>

        <PrimaryButton
          className="mt-6 flex w-full items-center justify-center gap-2 bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          onClick={() => router.push(`/inventory/${car.id}`)}
        >
          <p>View Details</p>
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </PrimaryButton>
      </div>
    </div>
  );
}
