"use client"
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import LoginModal from "@/components/modals/login-modal/login-modal";
import React, { useState } from "react";

const Page = () => {
      const [loginModal, setLoginModal] = useState(false);

  return (
    <div className="min-h-screen">
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      <div className="min-h-screen bg-[url('/banner-top.jpg')] bg-cover bg-no-repeat">
        <Header setLoginModal={setLoginModal} />
        {/* <Herosection /> */}
      </div>
    </div>
  );
};

export default Page;
