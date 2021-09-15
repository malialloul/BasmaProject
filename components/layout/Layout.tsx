import React, { useEffect, useState } from "react";
import Head from "next/head";
import { LayoutProps } from "../../Types";
import Header from "../sections/Header";
import useLanguage from "../hooks/UseLanguage";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import PricingTable from "../sections/PricingTable";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const Layout = ({
  children,
  title = "This is the default title"
}: LayoutProps) => {
  const [currentLanguage, isRTL] = useLanguage();

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="images/logo.png" />
      </Head>
      <>
        <div className="top-0 pt-10 pl-10 pr-10 ">{children}</div>
      </>
    </div>
  );
};

export default Layout;
