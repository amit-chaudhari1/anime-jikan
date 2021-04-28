import React from "react";
import Layout from "../components/Layout";
import { Emessage } from "./myList";

const Error = () => {
  return (
    <Layout title={"Error"}>
      <Emessage />
    </Layout>
  );
};

//TODO: think about: Should Emessage have an cumpolsory message input?
export default Error;
