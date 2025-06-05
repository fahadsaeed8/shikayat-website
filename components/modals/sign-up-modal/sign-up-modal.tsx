"use client";

import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactModal from "@/components/common/react-modal/react-modal";
import Image from "next/image";

interface SignupModalProps {
  signupModal: boolean;
  setSignupModal: (value: boolean) => void;
  setLoginModal: (value: boolean) => void;
}

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignupFormData = z.infer<typeof signupSchema>;

const SignupModal = ({
  signupModal,
  setSignupModal,
  setLoginModal,
}: SignupModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormData) => {
    console.log("Signup form data:", data);
    // Trigger API call here
    setSignupModal(false);
  };

  return (
    <ReactModal modalIsOpen={signupModal} setIsOpen={setSignupModal}>
      <div className="bg-white rounded-[0px] w-[750vw] flex overflow-hidden shadow-lg">
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
            onClick={() => setSignupModal(false)}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Create an Account
            </h2>

            <button className="flex items-center justify-center w-full bg-blue-700 text-white py-2 rounded-full hover:bg-blue-800 transition cursor-pointer">
              <span className="mr-2">📘</span> Sign up with Facebook
            </button>
            <button className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-full hover:bg-red-600 transition cursor-pointer">
              <span className="mr-2">🟥</span> Sign up with Google
            </button>

            <div className="w-full border-t border-gray-300 my-4" />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-4"
            >
              {/* Name */}
              <div className="relative pb-6">
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-full text-sm bg-white border border-gray-300 focus:outline-none"
                />
                {errors.name && (
                  <p className="absolute text-sm text-red-500 left-4 bottom-[-2px]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="relative pb-6">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-full text-sm bg-white border border-gray-300 focus:outline-none"
                />
                {errors.email && (
                  <p className="absolute text-sm text-red-500 left-4 bottom-[-2px]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="relative pb-6">
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Password (Minimum 6 Characters)"
                  className="w-full px-4 py-2 rounded-full text-sm bg-white border border-gray-300 focus:outline-none"
                />
                {errors.password && (
                  <p className="absolute text-sm text-red-500 left-4 bottom-[-2px]">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-full text-white font-semibold bg-green-500 hover:bg-green-600 transition cursor-pointer"
              >
                Sign Up
              </button>

              <p className="text-sm text-gray-600 text-center mt-2">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    setSignupModal(false);
                    setLoginModal(true);
                  }}
                  className="text-green-600 underline cursor-pointer"
                >
                  Log In
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};

export default SignupModal;
