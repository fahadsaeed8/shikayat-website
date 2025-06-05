"use client";

import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactModal from "@/components/common/react-modal/react-modal";
import OTPModal from "../otp-modal/otp-modal";
import { useState } from "react";
import Image from "next/image";

interface ForgotPasswordModalProps {
  forgotModal: boolean;
  setForgotModal: (value: boolean) => void;
  setLoginModal: (value: boolean) => void;
}

const forgotPasswordSchema = z.object({
  emailOrPhone: z.string().min(1, "Email or mobile is required"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordModal = ({
  forgotModal,
  setForgotModal,
  setLoginModal,
}: ForgotPasswordModalProps) => {
  const [otpModal, setOtpModal] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log("Forgot Password form data:", data);
    setForgotModal(false);
  };

  return (
    <>
      <ReactModal modalIsOpen={forgotModal} setIsOpen={setForgotModal}>
        <div className="bg-white rounded-[0px] w-[50vw] flex overflow-hidden shadow-lg">
          {/* Left side */}
          <div className="w-[30%] bg-[#CBD5F1] hidden md:flex items-center justify-center p-0">
            <Image
              src="/images/bg-pattern.png"
              alt="Login Graphic"
              width={508}
              height={1256}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side */}
          <div className="w-full md:w-[70%] bg-[#F7F7FA] p-8 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 cursor-pointer hover:text-gray-700 transition"
              onClick={() => setForgotModal(false)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 bg-green-400 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">
                I forgot my password
              </h2>

              <p className="text-sm text-gray-500 text-center">
                Please enter the email address or phone number you use to log in
                to reset your password.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-4 mt-2"
              >
                <div className="relative pb-6">
                  <input
                    {...register("emailOrPhone")}
                    type="text"
                    placeholder="Email or Mobile Number"
                    className="w-full px-4 py-2 rounded-full text-sm bg-white border border-gray-300 focus:outline-none"
                  />
                  {errors.emailOrPhone && (
                    <p className="absolute text-sm text-red-500 left-4 bottom-[-2px]">
                      {errors.emailOrPhone.message}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setOtpModal(true)}
                  disabled={!!errors.emailOrPhone}
                  type="submit"
                  className="w-full py-2 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 transition cursor-pointer"
                >
                  Continue
                </button>

                <button
                  type="button"
                  className="text-sm text-gray-600 underline mt-2 mx-auto block hover:text-gray-800 transition cursor-pointer"
                  onClick={() => {
                    setForgotModal(false);
                    setLoginModal(true);
                  }}
                >
                  Go Back
                </button>
              </form>
            </div>
          </div>
        </div>
      </ReactModal>
      <OTPModal otpModal={otpModal} setOtpModal={setOtpModal} />
    </>
  );
};

export default ForgotPasswordModal;
