import React from "react";
import { useTranslation } from "next-i18next";
import UseLanguage from "../hooks/UseLanguage";
import List from "../helper/List";

const Footer = () => {
  const { t } = useTranslation();
  const [currentLanguage] = UseLanguage();
  const listIcon = (
    <img
      src={
        currentLanguage === "en"
          ? "images/icons/angle-double-right.svg"
          : "images/icons/angle-double-left.svg"
      }
      className="w-4 h-4 font-bold"
    />
  );

  return (
    <div className="bg-dargGray mt-24 mb-20 text-white ">
      <div className="grid grid-cols-12 pb-20">
        <div className="col-span-1"></div>
        <div className="col-span-10 pt-20 flex h-full justify-between items-center">
          <div className="w-1/5">
            <div className="flex-col">
              <div>
                <img src="images/logo2.png" />
              </div>
              <br />
              <div className="break-words text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Aliquam
                nam
              </div>
            </div>
          </div>
          <>
            <List
              title={t("common.about")}
              listContentArray={[
                {
                  icon: listIcon,
                  contentText: t("common.about_us")
                },
                {
                  icon: listIcon,
                  contentText: t("footer.contact")
                },
                {
                  icon: listIcon,
                  contentText: t("common.portfolio")
                }
              ]}
            />
          </>
          <>
            <List
              title={t("common.support")}
              listContentArray={[
                {
                  icon: listIcon,
                  contentText: "support@example.com"
                },
                {
                  icon: listIcon,
                  contentText: "+61 3 8376 6284"
                },
                {
                  icon: listIcon,
                  contentText: t("common.services")
                }
              ]}
            />
          </>
          <>
            <List
              title={t("footer.follow_us")}
              listContentArray={[
                {
                  icon: (
                    <img
                      src={"images/icons/facebook-filled.svg"}
                      className="w-4 h-4 font-bold"
                    />
                  ),
                  contentText: t("footer.facebook")
                },
                {
                  icon: (
                    <img
                      src={"images/icons/twitter-filled.svg"}
                      className="w-4 h-4 font-bold"
                    />
                  ),
                  contentText: t("footer.twitter")
                },
                {
                  icon: (
                    <img
                      src={"images/icons/instagram-original.svg"}
                      className="w-4 h-4 font-bold"
                    />
                  ),
                  contentText: t("footer.instagram")
                }
              ]}
            />
          </>
        </div>
        <div className="col-span-1"></div>
      </div>
      <hr className="w-full bg-gray-100" />
      <div className="text-center w-full p-10 flex justify-center  items-center h-full">
        {t("footer.copyright")} &copy; {t("footer.all_rights_reserved")}
      </div>
    </div>
  );
};
export default Footer;
