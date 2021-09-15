import React from "react";
import { useTranslation } from "next-i18next";
import useLanguage from "../hooks/UseLanguage";
import Card from "../helper/Card";
import CommonLayout from "../layout/CommonLayout";

const Services = () => {
  const [currentLanguage, isRTL] = useLanguage();
  const { t } = useTranslation();

  return (
    <CommonLayout
      backgroundColor="bg-gray-200"
      title={t("common.services")}
      titleDescription={
        <span className="font-bold">
          {t("services.choose_what_you_like_our_services")}
        </span>
      }
    >
      <div className=" flex flex-wrap w-full justify-between gap-y-10 p-5 ">
        <Card
          icon={<img src="images/icons/wordpress.png" />}
          title={t("services.word_press")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />
        <Card
          icon={<img src="images/icons/logo_design.png" />}
          title={t("services.logo_design")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />
        <Card
          icon={<img src="images/icons/online_seo.png" />}
          title={t("services.online_seo")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />
        <Card
          icon={<img src="images/icons/mobile_apps.png" />}
          title={t("services.mobile_apps")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />
        <Card
          icon={<img src="images/icons/copy_writing.png" />}
          title={t("services.copy_writing")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />
        <Card
          icon={<img src="images/icons/brand_strategy.png" />}
          title={t("services.brand_strategy")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />
      </div>
    </CommonLayout>
  );
};
export default Services;
