import Image from "next/image";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center gap-5 h-screen">
      <div className="basis-1/2 flex justify-center items-center">{children}</div>
      <div className="w-1/2 h-full relative">
        <div className="absolute w-full h-full opacity-70 bg-gray-900"></div>
        <Image
          src="/assets/login_image.jpg"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default layout;
