"use client";

import {
  X,
  Eye,
  Facebook,
  CheckCircle,
  EyeOff,
  GanttChartSquare,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import ReactModal from "@/components/common/react-modal/react-modal";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ForgotPasswordModal from "../forgot-password-modal/forgot-password-modal";
import SignupModal from "../sign-up-modal/sign-up-modal";
import Image from "next/image";

interface LoginModalProps {
  loginModal: boolean;
  setLoginModal: (value: boolean) => void;
}

const loginSchema = z.object({
  email: z.string().min(1, "Email or mobile is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginModal = ({ loginModal, setLoginModal }: LoginModalProps) => {
  const [forgotModal, setForgotModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login form data:", data);
  };

  return (
    <>
      <ReactModal modalIsOpen={loginModal} setIsOpen={setLoginModal}>
        <div className="bg-white rounded-[0px] w-[750px] flex overflow-hidden shadow-lg">
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

          {/* Right side (form) */}
          <div className="w-full md:w-[70%] bg-[#F7F7FA] p-8 relative">
            {/* Close icon */}
            <button
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setLoginModal(false)}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Logo + Login text */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 bg-green-400 rounded-full" />
              <h2 className="text-2xl font-bold text-gray-900">Login</h2>

              <p className="text-sm text-gray-500">
                Don&apos;t have an account?{" "}
                <span
                  onClick={() => {
                    setSignupModal(true);
                    setLoginModal(false);
                  }}
                  className="font-semibold cursor-pointer underline text-gray-700"
                >
                  Sign up.
                </span>
              </p>

              {/* Social Buttons */}
              <div className="flex w-full gap-4">
                <button className="flex items-center justify-center gap-2 bg-[#3b5998] text-white px-4 py-2 rounded-full w-full text-sm font-medium cursor-pointer">
                  <Facebook className="w-4 h-4" />
                  Login with Facebook
                </button>
                <button className="flex items-center justify-center gap-2 bg-[#EA4335] text-white px-4 py-2 rounded-full w-full text-sm font-medium cursor-pointer">
                  <GanttChartSquare className="w-4 h-4" />
                  Sign in with Google
                </button>
              </div>

              <hr className="my-4 w-full border-gray-300" />

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-4"
              >
                {/* Email Field */}
                <div className="relative pb-6">
                  {" "}
                  {/* Relative + padding bottom to reserve space for error */}
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="Email or Mobile Number"
                    className="w-full px-4 py-2 rounded-full text-sm bg-white border border-gray-300 focus:outline-none"
                  />
                  {errors.email && (
                    <p className="absolute text-sm text-red-500 left-4 bottom-[-2px]">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div className="relative pb-6">
                  {" "}
                  {/* Relative + padding bottom */}
                  <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password (Minimum 6 Characters)"
                    className="w-full px-4 py-2 rounded-full text-sm bg-white border border-gray-300 focus:outline-none pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                  {errors.password && (
                    <p className="absolute text-sm text-red-500 left-4 bottom-[-2px]">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-700">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <CheckCircle className="text-green-500 w-4 h-4" />
                    <span>Remember me</span>
                  </label>
                  <span
                    onClick={() => {
                      setForgotModal(true);
                      setLoginModal(false);
                    }}
                    className="underline text-gray-600 cursor-pointer"
                  >
                    I forgot my password
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 rounded-full text-white font-semibold bg-green-200 hover:bg-green-300 transition cursor-pointer"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </ReactModal>

      <ForgotPasswordModal
        forgotModal={forgotModal}
        setForgotModal={setForgotModal}
        setLoginModal={setLoginModal}
      />
      <SignupModal
        signupModal={signupModal}
        setSignupModal={setSignupModal}
        setLoginModal={setLoginModal}
      />
    </>
  );
};

export default LoginModal;
