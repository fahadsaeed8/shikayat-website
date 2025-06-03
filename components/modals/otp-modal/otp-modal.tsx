"use client";

import { useRef, useState } from "react";
import { X } from "lucide-react";
import ReactModal from "@/components/common/react-modal/react-modal";

interface OTPModalProps {
  otpModal: boolean;
  setOtpModal: (value: boolean) => void;
}

const OTPModal = ({ otpModal, setOtpModal }: OTPModalProps) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isComplete, setIsComplete] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    setIsComplete(newOtp.every((digit) => digit !== ""));
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join("");
    console.log("Entered OTP:", enteredOtp);
    setOtpModal(false);
  };

  return (
    <ReactModal modalIsOpen={otpModal} setIsOpen={setOtpModal}>
      <div className="bg-white rounded-[30px] w-[40vw] p-8 relative shadow-lg">
        <button
          className="absolute top-4 right-4 cursor-pointer hover:text-gray-700 transition"
          onClick={() => setOtpModal(false)}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
          Enter OTP
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Please enter the 6-digit code sent to your email or phone.
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          ))}
        </div>

        <div className="w-full flex justify-center items-center">
          <button
            className={`w-full max-w-[230px] mx-auto py-2 rounded-full text-white font-semibold transition ${
              isComplete
                ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!isComplete}
            onClick={handleSubmit}
          >
            Verify
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default OTPModal;
