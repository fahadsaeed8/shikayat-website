"use client";

import { useState } from "react";
import StepSidebar from "@/components/common/step-sidebar/step-sidebar";
import ComplaintDetailsSection from "@/components/sections/complaint-details-section/complaint-details-section";
import StepBrandFormSection from "@/components/sections/step-brand-form-section/step-brand-form-section";
import StepDocumentUploadSection from "@/components/sections/step-document-upload-section/step-document-upload-section";

export default function CreateComplaintPage() {
  const [step, setStep] = useState(1);

  // Store complaint text & images from step 1
  const [complaintDetail, setComplaintDetail] = useState("");
  const [complaintImages, setComplaintImages] = useState<File[]>([]);

  // Other state for step 2
  const [brand, setBrand] = useState("");
  const [complaintAbout, setComplaintAbout] = useState("");

  // You might have uploadedImages state in step 3, if needed
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const validateStep = (current: number): boolean => {
    if (current === 1) return complaintDetail.trim().length > 0;
    if (current === 2)
      return brand.trim().length > 0 && complaintAbout.trim().length > 0;
    return true;
  };

  const handleStepChange = (targetStep: number) => {
    if (targetStep === step) return;
    if (validateStep(step)) {
      setStep(targetStep);
    } else {
      alert("Please complete the current step before continuing.");
    }
  };

  // Step 1 continue handler receives complaint + images
  const handleComplaintSubmit = (detail: string, images: File[]) => {
    setComplaintDetail(detail);
    setComplaintImages(images); // Save files here!
    setStep(2);
  };

  // Step 2 continue handler
  const handleBrandNext = (
    selectedBrand: string,
    selectedComplaint: string
  ) => {
    setBrand(selectedBrand);
    setComplaintAbout(selectedComplaint);
    setStep(3);
  };

  const handleFinalSubmit = () => {
    // Now you can access all collected info
    console.log("Step 1 detail:", complaintDetail);
    console.log("Step 1 images:", complaintImages); // << your images here!
    console.log("Step 2 brand:", brand);
    console.log("Step 2 complaint about:", complaintAbout);
    console.log("Step 3 uploaded files:", uploadedImages);

    // Do final submission logic here...
  };

  return (
    <div className="flex min-h-screen bg-[#1d1b3f] text-gray-900">
      {/* Sidebar */}
      <StepSidebar currentStep={step} onStepChange={handleStepChange} />

      {/* Main Content */}
      <main className="flex-1 bg-[#f5f6fa] p-8">
        {step === 1 && (
          <ComplaintDetailsSection
            onContinue={handleComplaintSubmit}
            initialFiles={complaintImages}
          />
        )}

        {step === 2 && (
          <StepBrandFormSection
            onNext={handleBrandNext}
            onBack={handleBack}
            initialBrand={brand}
            initialComplaintAbout={complaintAbout}
          />
        )}

        {step === 3 && (
          <StepDocumentUploadSection
            onNext={handleFinalSubmit}
            onBack={handleBack}
          />
        )}
      </main>
    </div>
  );
}
