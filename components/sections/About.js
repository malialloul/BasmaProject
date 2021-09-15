import React from "react";
import { useTranslation } from "next-i18next";
import Card from "../helper/Card";
import CommonLayout from "../layout/CommonLayout";

const About = () => {
  const { t } = useTranslation();

  return (
    <CommonLayout
      backgroundColor="bg-gray-200"
      title={t("common.about_us")}
      titleDescription={t("about.our_goal_is_to_make_your_life_easier")}
    >
      <div className=" flex flex-wrap w-full justify-between gap-y-10 ">
        <Card
          icon={<img src="images/icons/create_idea.png" />}
          title={t("about.create_idea")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />

        <Card
          icon={<img src="images/icons/smart_solutions.png" />}
          title={t("about.smart_solutions")}
          titleClassName={"text-xl font-bold"}
          body={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Ea laudantium empore nobis quisquam"
          }
          bodyClassName={"text-gray-500"}
        />

        <Card
          icon={<img src="images/icons/free_support.png" />}
          title={t("about.free_support")}
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

export default About;
