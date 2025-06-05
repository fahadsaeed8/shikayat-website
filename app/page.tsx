"use client";
import Footer from "@/components/common/Footer";
import ComplaintSection from "@/components/ComplaintSection";
import Header from "@/components/Header";
import Herosection from "@/components/Herosection";
import LoginModal from "@/components/modals/login-modal/login-modal";
import SlideCards from "@/components/SlideCards";
import SolutionSection from "@/components/SolutionSection";
import TalkAbout from "@/components/TalkAbout";
import React, { useState } from "react";

const Page = () => {
  const [loginModal, setLoginModal] = useState(false);
  const cards = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/32?img=1",
      name: "Ceren",
      department: "Ministry Of Family Social Services",
      views: 16009,
      title:
        "Payment Problem Due to Lack of Registration in Maternity Benefit Application",
      image: "/card-img.jpg",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/32?img=2",
      name: "Muhittin",
      department: "Turk Telekom",
      views: 102425,
      title: "Shocking Bill of 9582 TL Due to Uncancelled Commitment",
      image: "/card-img.jpg",
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/32?img=2",
      name: "Muhittin",
      department: "Turk Telekom",
      views: 102425,
      title: "Shocking Bill of 9582 TL Due to Uncancelled Commitment",
      image: "/card-img.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <LoginModal loginModal={loginModal} setLoginModal={setLoginModal} />
      <div className="min-h-screen bg-[url('/banner-top.jpg')] bg-cover bg-no-repeat">
        <Header setLoginModal={setLoginModal} />
        <Herosection />
        <div className="p-6 py-25 bg-[#f7f8fc]">
          <SlideCards cards={cards} />
        </div>{" "}
        <TalkAbout />
        <SolutionSection />
        <ComplaintSection />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
