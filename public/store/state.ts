import React from "react";
import { atom } from "recoil";

export const language = atom({
  key: "language",
  default: "en"
});
export const scrollToSection = atom({
  key: "section",
  default: "home"
});
