import classNames from "classnames";
import React from "react";
import { CommonLayoutProps } from "../../Types";
import useLanguage from "../hooks/UseLanguage";

const CommonLayout = ({
  backgroundColor,
  title,
  titleDescription,
  children
}: CommonLayoutProps) => {
  const [currentLanguage, isRTL] = useLanguage();

  return (
    <div className={"grid grid-cols-12 " + backgroundColor}>
      <div className="col-span-1"></div>
      <div className={"h-full col-span-10 mb-32 mt-14 w-full "}>
            <div className="flex-col flex text-center items-center justify-center text-2xl">
              <br />
              <span className="text-primary">{title}</span>
              <br />
              <div className="font-bold">{titleDescription}</div>
            </div>
          <br />
          {children}
      </div>
      <div className="col-span-1"></div>

    </div>
  );
};
export default CommonLayout;
