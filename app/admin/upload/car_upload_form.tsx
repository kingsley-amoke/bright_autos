// app/components/CarUploadForm.tsx
"use client";

import { createCarListingAction } from "@/app/actions/upload_car";
import { fuelTypes } from "@/app/constants/fuel_types";
import { Car } from "@/app/types/car";
import { FuelType } from "@/app/types/fuel_type";
import React, { useState, useRef, useEffect } from "react";

export default function CarUploadForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [color, setColor] = useState("");
  const [mileage, setMileage] = useState(0);
  const [transmission, setTransmission] = useState<"manual" | "automatic">(
    "automatic",
  );
  const [price, setPrice] = useState(0);
  const [drive, setDrive] = useState("");
  const [engine, setEngine] = useState("");
  const [condition, setCondition] = useState("");
  const [vin, setVin] = useState("");
  const [build, setBuild] = useState("");

  const [mfgName, setMfgName] = useState("");
  const [mfgLocation, setMfgLocation] = useState("");

  const [selectedFuel, setSelectedFuel] = useState<FuelType>(fuelTypes[0]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const resetForm = () => {
    setTitle("");
    setModel("");
    setYear(new Date().getFullYear());
    setColor("");
    setMileage(0);
    setTransmission("automatic");
    setPrice(0);
    setDrive("");
    setEngine("");
    setCondition("");
    setVin("");
    setBuild("");
    setMfgName("");
    setMfgLocation("");
    setSelectedFuel(fuelTypes[0]);

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setLoading(true);
    setStatusMessage("");

    const carPayload: Omit<Car, "id"> = {
      title,
      model,
      year: Number(year),
      color,
      mileage: Number(mileage),
      transmission,
      price: Number(price),
      drive,
      engine,
      condition,
      vin,
      image: "",
      build,
      manufacturer: {
        name: mfgName,
        location: mfgLocation,
      },
      type: selectedFuel,
    };

    const selectedFile = fileInputRef.current?.files?.[0] || null;

    try {
      const dataContainer = new FormData();
      dataContainer.append("carData", JSON.stringify(carPayload));

      if (selectedFile) {
        dataContainer.append("image", selectedFile);
      }

      const response = await createCarListingAction(dataContainer);

      if (response.success) {
        setStatusMessage("Success! Car listing posted successfully.");
        setPreviewUrl(null);
        formEl.reset();
        resetForm();
      } else {
        setStatusMessage(`Error: ${response.error}`);
      }
    } catch (err: any) {
      setStatusMessage(`System Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-xl shadow-md border border-gray-100 text-gray-800">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2">
        Create New Car Listing
      </h2>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Vehicle Image
          </label>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />

          {previewUrl && (
            <div className="mt-4 relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={previewUrl}
                alt="Car Preview"
                className="object-contain max-h-full max-w-full"
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Listing Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. 2026 Tesla Model 3 Long Range"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Model Name
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. Model 3"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Year
            </label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Color
            </label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. Solid Black"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Mileage (mi / km)
            </label>
            <input
              type="number"
              value={mileage}
              onChange={(e) => setMileage(Number(e.target.value))}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Price ($)
            </label>
            <input
              type="number"
              step="0.01"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Transmission
            </label>
            <select
              value={transmission}
              onChange={(e) =>
                setTransmission(e.target.value as "manual" | "automatic")
              }
              className="w-full p-2 border rounded-md bg-white"
            >
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Drivetrain
            </label>
            <input
              type="text"
              value={drive}
              onChange={(e) => setDrive(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. AWD, RWD"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Engine Configuration
            </label>
            <input
              type="text"
              value={engine}
              onChange={(e) => setEngine(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. Dual Motor, 2.0L I4"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Vehicle Condition
            </label>
            <input
              type="text"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. New, Certified Pre-Owned"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              VIN Code
            </label>
            <input
              type="text"
              value={vin}
              onChange={(e) => setVin(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="17-digit string identifier"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Build
            </label>
            <input
              type="text"
              value={build}
              onChange={(e) => setBuild(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="e.g. Sedan, SUV, Truck"
            />
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
            Manufacturer Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={mfgName}
                onChange={(e) => setMfgName(e.target.value)}
                required
                className="w-full p-2 border rounded-md bg-white"
                placeholder="e.g. Tesla"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                HQ / Assembly Location
              </label>
              <input
                type="text"
                value={mfgLocation}
                onChange={(e) => setMfgLocation(e.target.value)}
                required
                className="w-full p-2 border rounded-md bg-white"
                placeholder="e.g. Austin, Texas"
              />
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
          <h3 className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
            Fuel & Powertrain Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 items-end">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Fuel Core Designation
              </label>
              <select
                value={selectedFuel.name}
                onChange={(e) => {
                  const match = fuelTypes.find(
                    (f) => f.name === e.target.value,
                  );
                  if (match) setSelectedFuel(match);
                }}
                className="w-full p-2 border rounded-md bg-white"
              >
                {fuelTypes.map((f) => (
                  <option key={f.name} value={f.name}>
                    {f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            {/* <div className="flex items-center gap-2 pb-2">
              <span
                className="inline-block w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: selectedFuel.color }}
                aria-hidden
              />
              <span className="text-sm text-gray-600">
                Badge color & icon ({selectedFuel.icon}) set automatically from
                the preset
              </span>
            </div> */}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white font-medium py-3 rounded-md transition-all hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg text-lg"
        >
          {loading ? "Uploading Car..." : "Publish Car Listing"}
        </button>
      </form>

      {statusMessage && (
        <div
          className={`mt-6 p-3 rounded-md text-sm font-semibold text-center border ${
            statusMessage.includes("Success")
              ? "bg-green-50 border-green-200 text-green-800"
              : "bg-red-50 border-red-200 text-red-800"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </div>
  );
}
