import Image from "next/image";
import React from "react";
import { HTMLProps } from "react";

interface MessageProps extends HTMLProps<HTMLInputElement> {
  message: string;
  image?: string;
}
const Message: React.FC<MessageProps> = (props: MessageProps) => {
  return (
    <div className="flex flex-col justify-center w-full items-center gap-[55px]">
      <p className="text-style">{props.message}</p>
      <Image
        className="w-[92.75px] h-[138px]"
        src={props.image as string}
        alt="not found"
      />
    </div>
  );
};

export default Message;
