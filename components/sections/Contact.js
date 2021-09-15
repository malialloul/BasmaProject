import React from "react";
import classNames from "classnames";
import { useTranslation } from "next-i18next";
import useLanguage from "../hooks/UseLanguage";

const Contact = () => {
  const [currentLanguage, isRTL] = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1"></div>
      <div className="col-span-10">
        <div className="grid grid-cols-12 p-3 " id="contact">
          <div className="col-span-4 flex flex-wrap gap-y-4">
            <div className="w-full flex-col">
              <div>
                <span className="font-bold text-2xl">{t("contact.address")}</span>
              </div>
              <div>
                <span className="text-gray-400 font-bold">
                  121 King Street, Melbourne Victoria 3000 Australia
                </span>
              </div>
            </div>
            <br />
            <br />
            <div className="w-full flex-col">
              <div>
                <span className="font-bold text-2xl">{t("contact.phone")}</span>
              </div>
              <div>
                <span className="text-gray-400 font-bold">+61 3 8376 6284</span>
              </div>
            </div>
            <br />
            <div className="w-full flex-col">
              <div>
                <span className="font-bold text-2xl">{t("contact.email")}</span>
              </div>
              <div>
                <span className="text-gray-400 font-bold">
                  support@example.com
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-8 flex flex-wrap gap-y-10">
            <div className="w-1/2">
              <input
                className="rounded w-full bg-gray-100 p-3 placeholder- "
                placeholder={t("contact.name")}
              />
            </div>
            <div
              className={classNames("w-1/2", {
                "pl-2": currentLanguage === "en",
                "pr-2": currentLanguage === "ar"
              })}
            >
              <input
                className="rounded w-full bg-gray-100 p-3"
                placeholder={t("contact.email_address")}
              />
            </div>
            <div className="w-full">
              <input
                className="rounded w-full bg-gray-100 p-3"
                placeholder={t("contact.subject")}
              />
            </div>{" "}
            <div className="w-full">
              <textarea
                className="rounded bg-gray-100 w-full h-36 p-3"
                placeholder={t("contact.message")}
              />
            </div>
            <div className="text-center w-full">
              <button className="rounded p-3 text-white w-40 bg-orange">
                {t("contact.send_message")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};
export default Contact;
