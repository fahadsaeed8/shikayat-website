"use client";
import { VideoIcon, Pencil } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ComplaintMethod = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f7f8fc] px-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
        How would you like to submit your complaint?
      </h2>

      <div className="flex gap-6">
        {/* Video Option */}
        <div className="flex flex-col items-center bg-[#7B5CFA] text-white rounded-2xl p-8 w-48 cursor-pointer hover:scale-105 transition-transform">
          <div className="bg-white p-3 rounded-xl mb-4">
            <VideoIcon className="text-[#7B5CFA] w-8 h-8" />
          </div>
          <p className="font-medium text-center">Tell with Video</p>
        </div>

        {/* Writing Option */}
        <div
          onClick={() => router.push("/write-complaint")}
          className="flex flex-col items-center bg-white text-black rounded-2xl p-8 w-48 cursor-pointer border hover:scale-105 transition-transform relative"
        >
          <Image
            src={"/icons/complaint-write-method-icon.svg"}
            width={165}
            height={93}
            alt="img"
            className="absolute top-0"
          />
          <p className="font-medium text-center absolute bottom-[30px]">
            Tell by Writing
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComplaintMethod;
