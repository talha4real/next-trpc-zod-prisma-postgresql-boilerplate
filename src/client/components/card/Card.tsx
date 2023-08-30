import Image from "next/image";
import React from "react";
import { HTMLProps } from "react";

import { images } from "../../constants";
import { useRouter } from "next/router";
interface CardProps extends HTMLProps<HTMLInputElement> {
  signUpTitle?: string;
  middle?: boolean;
}
const Card: React.FC<CardProps> = (props: CardProps) => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className={
          router.pathname === "/register"
            ? `md:w-[486px] div-style ${
                props.middle ? "h-auto success-page-style" : "md:h-[690px]"
              }`
            : `w-[400px] md:w-[486px] div-style ${
                props.middle && "h-[328px] success-page-style"
              }`
        }
      >
        <div
          className={`md:w-[386px] inner-card-div-style
            ${router.pathname === "/register" ? "h-auto" : "h-[277px]"}`}
        >
          <div
            className={`w-full flex flex-col gap-[15px]
            ${router.pathname === "/register" ? "h-auto" : "h-[73px]"}`}
          >
            <div>
              <div
                className={`${
                  props.middle ? "flex justify-center items-center" : ""
                } `}
              >
                <Image src={images.logo.default} />
              </div>
              <div>
                <p className="text-style pl-[7px]">{props.signUpTitle}</p>
              </div>
            </div>
            <div className="">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
