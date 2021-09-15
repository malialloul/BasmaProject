import React from "react";
import { useRecoilValue } from "recoil";
import { language } from "../../public/store/state";
import i18nTr from "../../public/i18n";

const UseLanguage = () => {
  const currentLanguage = i18nTr.language;
  const dir = currentLanguage === "en" ? "ltr" : "rtl";
  return [currentLanguage, dir === "rtl" ? true : false];
};

export default UseLanguage;