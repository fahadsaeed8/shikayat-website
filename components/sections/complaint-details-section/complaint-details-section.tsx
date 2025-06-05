import { Mic } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

interface ComplaintDetailsSectionProps {
  onContinue: (detail: string, images: File[]) => void;
  initialFiles?: File[];
}

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ComplaintDetailsSection: React.FC<ComplaintDetailsSectionProps> = ({
  onContinue,
  initialFiles = [],
}) => {
  const [complaintDetail, setComplaintDetail] = useState("");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<File[]>(initialFiles);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Clear error when user types or uploads image
  useEffect(() => {
    if (error && complaintDetail.trim() !== "" && files.length > 0) {
      setError("");
    }
  }, [complaintDetail, files, error]);

  useEffect(() => {
    setFiles(initialFiles);
  }, [initialFiles]);

  const isImage = (file: File) => file.type.startsWith("image/");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    // Validate files
    const invalidFiles = selectedFiles.filter(
      (file) => !isImage(file) || file.size > MAX_FILE_SIZE
    );

    if (invalidFiles.length > 0) {
      setError(
        `Please upload only images smaller than 5MB. ${invalidFiles.length} file(s) were ignored.`
      );
      // Clear the file input to allow re-selection
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }

    const validFiles = selectedFiles.filter(
      (file) => isImage(file) && file.size <= MAX_FILE_SIZE
    );

    setFiles((prev) => [...prev, ...validFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleContinue = () => {
    if (!complaintDetail.trim()) {
      setError("Please describe your complaint.");
      return;
    }
    if (files.length === 0) {
      setError("Please upload at least one image.");
      return;
    }
    setError("");
    onContinue(complaintDetail, files);
  };

  return (
    <div className="p-6 bg-[#f7f8fc] rounded-xl">
      {/* Textarea Section */}
      <div className={`relative ${error ? "mb-0" : "mb-6"}`}>
        <textarea
          className="w-full rounded-xl p-6 text-sm text-gray-700 resize-none h-[160px] border outline-none"
          placeholder="What problem did you experience with the product or service?"
          value={complaintDetail}
          onChange={(e) => setComplaintDetail(e.target.value)}
        />
        <Mic className="absolute bottom-4 right-4 text-gray-400 cursor-pointer" />
        {/* <span className="absolute bottom-4 right-4 text-gray-400">🎙️</span> */}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-6">{error}</p>}

      {/* Upload Section */}
      <div
        className="h-[120px] border-2 border-dashed border-[#7B5CFA] bg-[#f7f8fc] rounded-xl p-8 flex justify-center items-center mb-6 cursor-pointer"
        onClick={triggerFileInput}
      >
        <button
          type="button"
          className="bg-[#7B5CFA] text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#684ae5] cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          ➕ Add Image
        </button>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      {/* Preview uploaded images */}
      {files.length > 0 && (
        <div className="flex gap-4 mb-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="relative w-24 h-24 rounded-lg overflow-hidden border"
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
                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 aspect-square w-6 h-6 flex items-center justify-center hover:bg-red-600 cursor-pointer"
                title="Remove image"
                type="button"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Continue Button */}
      <div className="flex justify-end">
        <button
          type="button"
          className="bg-[#c3ffe3] text-[#00836b] px-8 py-2 rounded-full font-semibold hover:bg-[#a8fbd7] cursor-pointer"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ComplaintDetailsSection;
