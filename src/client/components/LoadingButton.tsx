import React from "react";
import Spinner from "./Spinner";
import { LoadingButtonProps } from "../lib/types";

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  textColor = "text-white",
  btnColor = "bg-ct-yellow-600",
  children,
  loading = false,
}) => {
  return (
    <div className="outer-border">
      <button
        type="submit"
        className={`w-full text-white bg-[#171A20] focus:bg-[#383E4A] btn-style py-[16px] px-[25px] text-[#EBEEF1] rounded-md ${
          loading ? "bg-[#ccc]" : ""
        }`}
      >
        {loading ? (
          <div className="text-white flex justify-center items-center gap-1">
            <Spinner />
            <span className="text-white inline-block">Loading...</span>
          </div>
        ) : (
          <span className={`${textColor}`}>{children}</span>
        )}
      </button>
    </div>
  );
};
