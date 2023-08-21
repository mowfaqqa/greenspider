import Head from "next/head";
import React from "react";

const Seo = ({ title, description, canonical, openGraph }: any) => {
  return (
    <>
      <Head>
        <title>Greenspider</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Green Spider Consult Limited - Protecting the Enviroment For Sustainable Development"
        />
        <meta
          name="keywords"
          content="Green Spider, Sustainable Development, Protecting enviroment, enviroment, Green"
        />
        <meta name="author" content="Green Spider" />
      </Head>
    </>
  );
};

export default Seo;
