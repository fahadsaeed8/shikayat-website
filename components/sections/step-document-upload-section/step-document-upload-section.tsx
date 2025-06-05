"use client";
import { useState, useRef } from "react";
import { X } from "lucide-react";

interface StepDocumentUploadSectionProps {
  onNext: (files: File[]) => void;
  onBack: () => void;
}

export default function StepDocumentUploadSection({
  onNext,
  onBack,
}: StepDocumentUploadSectionProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [visibility, setVisibility] = useState("public");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      setFiles((prev) => [...prev, ...selectedFiles]);
      setFileError("");
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (files.length === 0) {
      setFileError("Please upload at least one file.");
      return;
    }
    setFileError("");
    onNext(files); // Pass files to parent
  };

  const isImage = (file: File) => file.type.startsWith("image/");

  return (
    <div className="flex-1 p-10 rounded-tl-[26px] rounded-bl-[26px] bg-[#f7f8fc]">
      <div className="flex gap-6 text-gray-500 mb-10">
        <span className="font-medium text-[#9ca3af]">Login</span>
        <span>Complaints</span>
        <span>
          Trend <sup>100</sup>
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Accelerate Solution
      </h2>

      {/* Upload box */}
      <div className="h-[300px] flex flex-col justify-center items-center border-2 border-dashed border-[#7B5CFA] rounded-xl p-10 text-center mb-4">
        <p className="text-sm text-gray-600 mb-4">
          Strengthen your complaint by uploading documents such as invoices,
          photos, videos, etc. regarding the problem you are experiencing.
        </p>

        <label
          className="inline-block bg-[#7B5CFA] text-white px-6 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-[#684ae5]"
          onClick={triggerFileInput}
        >
          + Upload
          <input
            type="file"
            className="hidden"
            ref={fileInputRef}
            multiple
            accept="image/*,application/pdf"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* File validation error */}
      {fileError && <p className="text-red-500 mb-4">{fileError}</p>}

      {/* File preview grid */}
      {files.length > 0 && (
        <div className="mb-6">
          <div className="flex flex-wrap gap-4 mb-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative w-32 h-32 rounded-lg overflow-hidden border"
              >
                {isImage(file) ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt={`preview-${index}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-3xl">
                    📄
                  </div>
                )}
                <button
                  onClick={() => handleRemoveFile(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  title="Remove file"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          {/* Visibility options */}
          <div className="flex items-center gap-4">
            <label className="text-sm flex items-center gap-2">
              <input
                type="radio"
                name="visibility"
                value="public"
                checked={visibility === "public"}
                onChange={() => setVisibility("public")}
              />
              For Everyone to See
            </label>
            <label className="text-sm flex items-center gap-2">
              <input
                type="radio"
                name="visibility"
                value="brand"
                checked={visibility === "brand"}
                onChange={() => setVisibility("brand")}
              />
              Only Brand See
            </label>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 px-8 py-2 rounded-full font-semibold hover:bg-gray-400"
          onClick={onBack}
        >
          Go Back
        </button>
        <button
          className="bg-[#2ee4a6] text-white px-8 py-2 rounded-full font-semibold hover:bg-[#22c29e]"
          onClick={handleSubmit}
        >
          Gönder
        </button>
      </div>
    </div>
  );
}
