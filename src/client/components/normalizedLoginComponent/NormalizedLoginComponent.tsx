import {
  FormProvider,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormReturn,
} from "react-hook-form";
import FormInput from "../FormInput";
import { LoadingButton } from "../LoadingButton";
import React from "react";
import { LoginInput, EmailInput } from "../../lib/types";

interface NormalizedComponentProps {
  message: string;
  email?: boolean;
  emailValue?: string;
  method: UseFormReturn<any>;
  submithandler: UseFormHandleSubmit<EmailInput | LoginInput>; // Use a union type
  onSubmitHanlder: SubmitHandler<any>; // Update the type
  isLoading: boolean;
  edit?: (() => void) | null;
}

const NormalizedLoginComponent: React.FC<NormalizedComponentProps> = ({
  message,
  email,
  emailValue = "",
  method,
  submithandler,
  onSubmitHanlder,
  isLoading,
  edit = null,
}) => {
  return (
    <>
      <div className="flex justify-between items-center px-[7px]">
        <div className="text-style w-full">
          <p className="text-style">{message}</p>
          {email ? "" : <p className="text-sm text-min">{emailValue}</p>}
        </div>
        {email ? (
          ""
        ) : (
          <button
            className="text-sm text-min underline"
            onClick={edit || undefined}
          >
            Edit
          </button>
        )}
      </div>

      <FormProvider {...method}>
        <form
          className="w-full flex flex-col gap-[25px]"
          onSubmit={submithandler(onSubmitHanlder)}
        >
          {email ? (
            <FormInput label="Email Address" name="email" type="email" />
          ) : (
            <div className="w-full flex flex-col gap-[15px]">
              <FormInput
                label="Email Address"
                name="email"
                type="email"
                show={false}
                value={emailValue}
                onChange={() => {}}
              />

              <FormInput label="Password" name="password" type="password" />
              <p className="text-sm text-min underline pl-[7px]">
                Forgot password?
              </p>
            </div>
          )}
          <div className="w-full">
            <LoadingButton loading={isLoading} textColor="text-white">
              Continue
            </LoadingButton>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default NormalizedLoginComponent;
