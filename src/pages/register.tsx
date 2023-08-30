import type { GetServerSideProps, NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import FormInput from "../client/components/FormInput";
import { LoadingButton } from "../client/components/LoadingButton";
import { toast } from "react-toastify";
import { trpc } from "../client/utils/trpc";
import Layout from "~/client/components/layout/Layout";
import { RegisterInput } from "../client/lib/types";
import { registerSchema } from "../client/lib/schema/user";
import Card from "~/client/components/card/Card";
import React from "react";
import { images } from "~/client/constants";
import Message from "~/client/components/message";
import useStore from "../client/store";

const RegisterPage: NextPage = () => {
  const [isSignupSuccessfull, setIsSignupSuccessfull] = React.useState(false);
  const store = useStore();

  const { mutate: SignUpUser, isLoading } = trpc.registerUser.useMutation({
    onSuccess(data) {
      toast(`Welcome ${data.data.user.firstname}!`, {
        type: "success",
        position: "top-right",
      });
      setIsSignupSuccessfull(true);
    },
    onError(error) {
      toast(error.message, {
        type: "error",
        position: "top-right",
      });
    },
  });

  const methods = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    store.setEmail(event.target.value);
  };

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
    // 👇 Execute the Mutation
    SignUpUser(values);
  };
  return (
    <Layout>
      {!isSignupSuccessfull ? (
        <Card signUpTitle="Create your account">
          <FormProvider {...methods}>
            <form
              className="flex flex-col gap-[25px]"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col md:flex-row gap-[25px] sm:gap-[16px]">
                  <FormInput label="Legal first name" name="firstname" />
                  <FormInput label="Legal last name" name="lastname" />
                </div>
                <p className="pl-[7px] text-[#B5B5B5] signup-form-text">
                  Make sure it matches the name on your government ID.
                </p>
              </div>
              <div className="flex flex-col gap-[10px]">
                <FormInput
                  label="Email"
                  value={store.email}
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                />
                <p className="pl-[7px] text-[#B5B5B5] signup-form-text">
                  We'll email you confirmations and receipts.
                </p>
              </div>
              <FormInput label="Password" name="password" type="password" />
              <div className="flex flex-col gap-[30px] mt-[10px]">
                <p className="signup-form-text text-[#B5B5B5] pl-[7px]">
                  By selecting{" "}
                  <span className="text-[#414552]">Agree and continue</span>, I
                  agree to Tyne’s{" "}
                  <span className="text-[#5A69FA]">
                    Terms of Service, Payments Terms of Service
                  </span>
                  , and acknowledge the{" "}
                  <span className="text-[#5A69FA]">Privacy Policy</span>.
                </p>
                <LoadingButton loading={isLoading} textColor="">
                  Sign Up
                </LoadingButton>
              </div>
            </form>
          </FormProvider>
        </Card>
      ) : (
        <Card middle={true}>
          <Message
            message={"Congrats, you've created your account"}
            image={images.signup_img.default}
          />
        </Card>
      )}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      requireAuth: false,
      enableAuth: false,
    },
  };
};

export default RegisterPage;
