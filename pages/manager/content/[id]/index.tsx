import { NextPage } from "next";
import Head from "next/head";

const ManagerContentEditPage: NextPage & {
  layout?: string;
} = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

ManagerContentEditPage.layout = "manager";
export default ManagerContentEditPage;
