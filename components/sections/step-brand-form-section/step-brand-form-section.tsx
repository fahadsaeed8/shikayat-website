"use client";
import { useEffect, useState } from "react";

interface BrandFormProps {
  onNext: (brand: string, complaintAbout: string) => void;
  onBack: () => void;
  initialBrand?: string;
  initialComplaintAbout?: string;
}

export default function StepBrandFormSection({
  onNext,
  onBack,
  initialBrand = "",
  initialComplaintAbout = "",
}: BrandFormProps) {
  const [brand, setBrand] = useState(initialBrand);
  const [complaintAbout, setComplaintAbout] = useState(initialComplaintAbout);
  const [brandError, setBrandError] = useState("");
  const [complaintAboutError, setComplaintAboutError] = useState("");

  useEffect(() => {
    setBrand(initialBrand);
    setComplaintAbout(initialComplaintAbout);
  }, [initialBrand, initialComplaintAbout]);

  const handleBrandChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBrand(value);
    if (value.trim()) {
      setBrandError("");
    }
  };

  const handleComplaintAboutChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setComplaintAbout(value);
    if (value.trim()) {
      setComplaintAboutError("");
    }
  };

  const handleSubmit = () => {
    let valid = true;

    if (!brand.trim()) {
      setBrandError("Brand is required.");
      valid = false;
    }

    if (!complaintAbout.trim()) {
      setComplaintAboutError("This field is required.");
      valid = false;
    }

    if (!valid) return;

    onNext(brand, complaintAbout);
  };

  return (
    <div className="flex-1 p-10 rounded-tl-[26px] rounded-bl-[26px] bg-[#f7f8fc]">
      <div className="flex gap-6 text-gray-500 mb-10">
        <span className="font-medium text-[#9ca3af]">Login</span>
        <span>Complaints</span>
        <span>
          Trend <sup>100</sup>
        </span>
      </div>

      {/* Brand Field */}
      <div className="mb-6">
        <label className="block font-semibold text-lg text-gray-800 mb-1">
          Brand
        </label>
        <p className="text-sm text-gray-400 mb-2">
          Write down the brand you are complaining about.
        </p>
        <input
          type="text"
          className={`w-full border rounded-full px-6 py-3 text-sm ${
            brandError ? "border-red-500" : "border-gray-300"
          }`}
          value={brand}
          onChange={handleBrandChange}
        />
        {brandError && (
          <p className="text-red-500 text-sm mt-1">{brandError}</p>
        )}
      </div>

      {/* Complaint About Field */}
      <div className="mb-6">
        <label className="block font-semibold text-lg text-gray-800 mb-1">
          What is your complaint about?
        </label>
        <input
          type="text"
          className={`w-full border rounded-full px-6 py-3 text-sm ${
            complaintAboutError ? "border-red-500" : "border-gray-300"
          }`}
          value={complaintAbout}
          onChange={handleComplaintAboutChange}
        />
        {complaintAboutError && (
          <p className="text-red-500 text-sm mt-1">{complaintAboutError}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 px-8 py-2 rounded-full font-semibold hover:bg-gray-400 cursor-pointer"
          onClick={onBack}
        >
          Go Back
        </button>
        <button
          className="bg-[#2ee4a6] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#22c29e] cursor-pointer"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
