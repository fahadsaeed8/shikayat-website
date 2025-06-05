// components/common/step-sidebar/step-sidebar.tsx
import { Check, Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StepSidebarProps {
  currentStep: number;
  onStepChange: (step: number) => void;
}

const steps = [
  { id: 1, label: "Complaint Detail" },
  { id: 2, label: "Brand" },
  { id: 3, label: "Document" },
];

export default function StepSidebar({
  currentStep,
  onStepChange,
}: StepSidebarProps) {
  return (
    <aside className="w-full sm:w-[320px] bg-[#1d1b3f] text-white p-8">
      <Link href={"/"}>
        <Image
          src={"/icons/shikayat-logo.svg"}
          width={312}
          height={51}
          alt="logo"
        />
      </Link>

      <div className="flex flex-col items-start gap-6 mt-[60px]">
        <div className="bg-[#7B5CFA] p-3 rounded-xl">
          <Pencil className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-lg font-semibold">About Akbank</h2>
      </div>

      <h1 className="text-2xl font-bold mt-2 mb-10">Create a Complaint</h1>

      {/* Step List */}
      <ol className="space-y-6">
        {steps.map((step) => {
          let stepStyle = "";
          let stepContent: React.ReactNode = step.id;

          if (currentStep > step.id) {
            stepStyle = "bg-green-500 text-white";
            stepContent = <Check className="w-4 h-4" />;
          } else if (currentStep === step.id) {
            stepStyle = "bg-[#7B5CFA] text-white";
          } else {
            stepStyle = "border border-gray-400 text-gray-400";
          }

          return (
            <li
              key={step.id}
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onStepChange(step.id)}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200 ${stepStyle}`}
              >
                {stepContent}
              </div>
              <span
                className={`${
                  currentStep >= step.id ? "text-white" : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
