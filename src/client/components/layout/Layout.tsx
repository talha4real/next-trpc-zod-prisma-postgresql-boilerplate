// components/Layout.tsx

import React, { ReactNode } from "react";
import { images } from "../../constants";
import Image from "next/image";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="absolute hidden sm:block -z-50 left-0 top-0 h-[100vh]">
        <div className="w-[201.14px] relative left-[80%]">
          <Image className="" src={images.badge_pink.default} />
        </div>
        <div className="w-[123.16px] absolute top-[5%]">
          <Image src={images.badge_green.default} />
        </div>
        <div className="w-[193.16px] left-[82%] absolute top-[25%]">
          <Image src={images.badge_blue.default} />
        </div>
        <div className="w-[153.16px] absolute top-[40%]">
          <Image src={images.badge_yellow.default} />
        </div>
        <div className="w-[153.16px] left-[62%] absolute bottom-[15%]">
          <Image src={images.badge_red.default} />
        </div>
        <div className="w-[103.16px] flex absolute bottom-0">
          <Image src={images.badge_light_green.default} />
        </div>
      </div>

      {/* <div className="flex justify-center items-center min-h-screen"> */}
      {/* <div
        className={`w-[486px] div-style ${
          props.error ? " h-auto" : "h-[377px]"
        }`}
      > */}
      {/* <div className="w-[386px] h-[277px] inner-card-div-style">
          <div className="h-[73px] w-full flex flex-col gap-[15px]">
            <h1 className="font-bold text-min text-3xl">Login</h1>
            <div className="flex flex-col gap-[25px]">{children}</div>
          </div>
        </div>
      </div> */}
      {/* </div> */}

      <div className="flex flex-col min-h-screen items-center justify-center">
        <main>{children}</main>
      </div>
      <div className="absolute hidden sm:block -z-50 right-0 top-0 h-[100vh]">
        <div className="w-[183.14px] absolute right-[90%] relative">
          <Image src={images.badge_half_green.default} />
        </div>
        <div className="w-[123.16px] absolute right-0 top-[9%]">
          <Image src={images.badge_half_purple.default} />
        </div>
        <div className="w-[163.16px] absolute right-[82%] top-[25%]">
          <Image src={images.badge_skin.default} />
        </div>
        <div className="w-[133.16px] right-[6%] absolute top-[45%]">
          <Image src={images.badge_full_red.default} />
        </div>
        <div className="w-[153.16px] absolute right-[62%] bottom-[15%]">
          <Image src={images.badge_lihtblue.default} />
        </div>
        <div className="w-[103.16px] flex absolute right-0 bottom-0">
          <Image src={images.badge_purple.default} />
        </div>
      </div>
    </>
  );
};

export default Layout;
