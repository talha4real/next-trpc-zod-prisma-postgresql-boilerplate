import type { GetServerSideProps, NextPage } from "next";
import useStore from "../client/store";
import Layout from "~/client/components/layout/Layout";
import Card from "~/client/components/card";
import Image from "next/image";
import { images } from "~/client/constants";
import Message from "~/client/components/message";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const refresh_token = req.cookies["refresh_token"];
  const access_token = req.cookies["access_token"];

  if (!refresh_token && !access_token) {
    return {
      props: {
        access_token,
      },
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      access_token,
      requireAuth: true,
      enableAuth: true,
    },
  };
};

const HomePage: NextPage<{ access_token: string }> = ({ access_token }) => {
  const store = useStore();

  return (
    <>
      <Layout>
        <Card middle={true}>
          <Message
            message={"Congrats, you've logged in."}
            image={images.login_img.default}
          />
        </Card>
      </Layout>
    </>
  );
};

export default HomePage;
