import React from "react";
import { useFormContext } from "react-hook-form";
import { FormInputProps } from "../lib/types";

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  show = true,
  value = null,
  onChange,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className={`relative ${show ? "" : "hidden"}`}>
        <div className="outer-border items-center justify-center flex flex-col gap-[15px]">
          {value ? (
            <input
              type={type}
              value={value}
              autoComplete="on"
              className={
                errors[name]
                  ? "block double-border px-[15px] py-[20px] input-style w-full text-black bg-transparent rounded-lg border-1 border-[#FF4752] appearance-none dark:border-[#FF4752] peer"
                  : "block double-border input-style px-[15px] py-[20px] w-full text-black bg-transparent rounded-lg border-1 border-[#B5B5B5] appearance-none dark:border-[#B5B5B5] peer"
              }
              {...register(name)}
              onChange={onChange}
              placeholder=" "
            />
          ) : (
            <input
              type={type}
              autoComplete="on"
              className={
                errors[name]
                  ? "block double-border px-[15px] py-[20px] input-style w-full text-black bg-transparent rounded-lg border-1 border-[#FF4752] appearance-none dark:border-[#FF4752] peer"
                  : "block double-border input-style px-[15px] py-[20px] w-full text-black bg-transparent rounded-lg border-1 border-[#B5B5B5] appearance-none dark:border-[#B5B5B5] peer"
              }
              {...register(name)}
              placeholder=" "
            />
          )}

          <label
            htmlFor="floating_outlined"
            className={
              errors[name]
                ? "absolute text-sm text-gray-800 dark:text-[#FF4752] duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-[21px] peer-focus:text-[#B5B5B5] peer-focus:dark:text-[#171A20] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                : "absolute text-sm text-gray-800 dark:text-[#B5B5B5] duration-300 transform -translate-y-4 scale-75 z-10 origin-[0] left-[21px] peer-focus:text-[#B5B5B5] peer-focus:dark:text-[#171A20] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            }
          >
            {label}
          </label>
        </div>
        {errors[name] && (
          <p className="text-[#FF4752] text-xs ml-2 mt-1">
            {errors[name]?.message as unknown as string}
          </p>
        )}
      </div>
    </>
  );
};

export default FormInput;
