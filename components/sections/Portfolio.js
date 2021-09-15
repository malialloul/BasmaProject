import React, { useState } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import CommonLayout from "../layout/CommonLayout";
import useLanguage from "../hooks/UseLanguage";

const Portfolio = () => {
  const { t } = useTranslation();
  const [currentLanguage, isRTL] = useLanguage();

  const [index, setIndex] = useState(0);

  let buttons = [];
  buttons.push(
    <button
      className={classNames("p-3 rounded border border-purple-500", {
        "bg-primary text-white": 0 === index,
        "bg-transparent bg-white ": 0 !== index
      })}
    >
      {t("portfolio.show_all")}
    </button>
  );
  buttons.push(
    <button
      className={classNames("p-3 rounded border border-purple-500", {
        "bg-primary text-white": 1 === index,
        "bg-transparent bg-white ": 1 !== index
      })}
    >
      {t("portfolio.graphic")}
    </button>
  );
  buttons.push(
    <button
      className={classNames("p-3 rounded border border-purple-500", {
        "bg-primary text-white": 2 === index,
        "bg-transparent bg-white ": 2 !== index
      })}
    >
      {t("portfolio.landing")}
    </button>
  );
  buttons.push(
    <button
      className={classNames("p-3 rounded border border-purple-500", {
        "bg-primary text-white": 3 === index,
        "bg-transparent bg-white ": 3 !== index
      })}
    >
      {t("portfolio.art_design")}{" "}
    </button>
  );
  return (
    <CommonLayout
      title={t("common.portfolio")}
      titleDescription={
        <>
          <div className="text-center w-full">
            {currentLanguage == "en" ? (
              <>
                {" "}
                <span className="font-bold text-4xl">See our </span>
                <span className="sectionTitle text">amazing portfolio</span>
                <span className="font-bold text-4xl"> collection</span>
              </>
            ) : (
              <span>{t("portfolio.see_our_amazing_portfolio_collection")}</span>
            )}
          </div>
          <br />
          <br />
        </>
      }
    >
      <>
        <div className="flex justify-center gap-x-2 text-2xl">
          {buttons.map((button, i) => {
            return <div key={"button"+i} onClick={() => setIndex(i)}>{button}</div>;
          })}
        </div>
        <br />
        <div className=" flex flex-wrap w-full justify-between gap-y-10 p-5 ">
          <img src="images/portfolio1.jpeg" className="rounded w-96" />
          <img src="images/portfolio2.jpeg" className="rounded w-96" />
          <img src="images/portfolio3.jpeg" className="rounded w-96" />
          <img src="images/portfolio4.jpeg" className="rounded w-96" />
          <img src="images/portfolio5.jpeg" className="rounded w-96" />
          <img src="images/portfolio6.jpeg" className="rounded w-96" />
        </div>
      </>
    </CommonLayout>
  );
};
export default Portfolio;
