import React, { useState } from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import i18nTr from "../../public/i18n";
import Link from "next/link";
import useLanguage from "../hooks/UseLanguage";
import DropDownMenu from "../helper/DropDownMenu";
import { HeaderProps } from "../../Types";

const Header = ({ changeSelection }: HeaderProps) => {
  const { t } = useTranslation();
  const [currentLanguage, isRTL] = useLanguage();
  const [visible, setVisible] = useState(false);
  const [buttonIndex, setButtonIndex] = useState(0);
  const changeLanguageForDropDown = (lang) => {
    i18nTr.changeLanguage(lang);
    setVisible(false);
  };

  const logo = (
    <div
      className={classNames("w-1/2", {
        "float-right": currentLanguage === "ar",
        "float-left": currentLanguage === "en"
      })}
    >
      <Link href="/">
        <img
          src="/images/logo.png"
          className={classNames("w-30 cursor-pointer", {})}
        />
      </Link>
    </div>
  );

  const languageDetails = (
    <div className=" flex p-2  items-center">
      <select
        defaultValue={currentLanguage + ""}
        onChange={(e) => changeLanguageForDropDown(e.target.value)}
        className="lg:p-2 md:p-2 text-purple-500 rounded cursor-pointer"
      >
        <option key={"en"} value="en">
          {t("home.english")}
        </option>
        <option key={"ar"} value="ar">
          {t("home.arabic")}
        </option>
      </select>
    </div>
  );

  const NavBarSmaller = (
    <div
      className={classNames(
        "w-1/2 text-xl text-white flex  justify-center items-center gap-x-8",
        {
          "float-right": currentLanguage === "en",
          "float-left": currentLanguage === "ar"
        }
      )}
    >
      <DropDownMenu
        backgroundColor="bg-indigo-500"
        title={t("home.menu")}
        titleClass={"cursor-pointer"}
      >
        <span className="cursor-pointer" onClick={() => changeSelection(0)}>
          {t("home.home")}
        </span>
        <span className="cursor-pointer" onClick={() => changeSelection(1)}>
          {t("common.about")}
        </span>
        <span className="cursor-pointer" onClick={() => changeSelection(2)}>
          {t("common.services")}
        </span>
        <span className="cursor-pointer" onClick={() => changeSelection(3)}>
          {t("common.portfolio")}
        </span>
        <span className="cursor-pointer" onClick={() => changeSelection(4)}>
          {t("home.pricing")}
        </span>
        <span className="cursor-pointer" onClick={() => changeSelection(5)}>
          {t("home.contact_us")}
        </span>
      </DropDownMenu>
      {languageDetails}
    </div>
  );

  const NavBar = (
    <div
      className={classNames(
        " text-xl text-white sm:hidden md:visible lg:visible md:flex lg:flex justify-center items-center gap-x-8",
        {
          "float-right": currentLanguage === "en",
          "float-left": currentLanguage === "ar"
        }
      )}
    >
      <span className="cursor-pointer" onClick={() => changeSelection(0)}>
        {t("home.home")}
      </span>
      <span className="cursor-pointer" onClick={() => changeSelection(1)}>
        {t("common.about")}
      </span>
      <span className="cursor-pointer" onClick={() => changeSelection(2)}>
        {t("common.services")}
      </span>
      <span className="cursor-pointer" onClick={() => changeSelection(3)}>
        {t("common.portfolio")}
      </span>
      <span className="cursor-pointer" onClick={() => changeSelection(4)}>
        {t("home.pricing")}
      </span>
      <span className="cursor-pointer" onClick={() => changeSelection(5)}>
        {t("home.contact_us")}
      </span>
      {languageDetails}
    </div>
  );

  return (
    <div className="bg-gray-100">
    <div className={classNames("grid grid-cols-12", {})}>
      <div className="col-span-1"></div>
      <div className="col-span-4 flex-col justify-start mt-5">
        <div className="p-3">{logo}</div>
        <div className="mt-32  h-full">
          <div className="flex justify-start gap-x-3">
            <div className="flex justify-start items-center">
              <div className="bg-primary rounded w-20 h-2"></div>
            </div>
            <div className="text-2xl">WELCOME TO OYA</div>
          </div>
          <div className="w-full mt-10 ">
            <span className="text-gray-100 headerText text ">
              A DIGITAL AGENCY
            </span>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              <button
                onClick={() => setButtonIndex(0)}
                className={classNames(
                  "rounded p-3 w-40 border border-yellow-500",
                  {
                    "text-white bg-orange": buttonIndex === 0
                  }
                )}
              >
                {t("common.get_started")}
              </button>
              <button
                onClick={() => setButtonIndex(1)}
                className={classNames(
                  "rounded p-3 w-40 border border-yellow-500",
                  {
                    "text-white bg-orange": buttonIndex === 1
                  }
                )}
              >
                {t("common.get_started")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7 flex justify-end relative">
        <img
          src="images/bg-intro.png"
          className={classNames({
            "flip-horizantal": currentLanguage === "ar"
          })}
        />
        <div className="absolute flex justify-center items-center top-5 ">{NavBar}</div>
        <div className="absolute sm:visible md:hidden w-full lg:hidden  flex justify-center top-5">
          {NavBarSmaller}
        </div>
        <div className={classNames("absolute mt-32 flex justify-center text-center h-full w-full", {
          "lg:left-20 md:left-0 sm:left-0": currentLanguage === "en",
          "lg:right-20 md:left-0 sm:left-0": currentLanguage === "ar"

        })}>
          <img src="images/banner.png" className="rounded headerImage" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
