import React from "react";
import { RecoilRoot } from "recoil";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import "../styles/app.css";

const EcommerceApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default EcommerceApp;
