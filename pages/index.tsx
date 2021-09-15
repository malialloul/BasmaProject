import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Layout from "../components/layout/Layout";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Portfolio from "../components/sections/Portfolio";
import Services from "../components/sections/Services";
import PricingTable from "../components/sections/PricingTable";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

const HomePage = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  let home = React.createRef();
  let about = React.createRef();
  let services = React.createRef();
  let portfolio = React.createRef();
  let pricingTable = React.createRef();
  let contact = React.createRef();
  useEffect(() => {
    scrollToSection(index);
  }, [index]);

  const scrollToSection = (index) => {
    let refs: any[] = [home, about, services, portfolio, pricingTable, contact];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        nearest: "block"
      });
    }
  };
  return (
    <Layout title={t("home.home_page")}>
      <>
        <div>
          <Header changeSelection={setIndex} />
        </div>

        <div ref={about as React.RefObject<HTMLDivElement>}>
          <About />
        </div>
        <div ref={portfolio as React.RefObject<HTMLDivElement>}>
          <Portfolio />
        </div>
        <div ref={services as React.RefObject<HTMLDivElement>}>
          <Services />
        </div>
        <div ref={pricingTable as React.RefObject<HTMLDivElement>}>
          <PricingTable />
        </div>
        <div ref={contact as React.RefObject<HTMLDivElement>}>
          <Contact />
        </div>

        <Footer />
      </>
    </Layout>
  );
};

export default HomePage;
