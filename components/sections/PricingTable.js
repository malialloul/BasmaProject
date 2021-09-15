import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import classNames from "classnames";
import CommonLayout from "../layout/CommonLayout";
import PricingTableCard from "../helper/PricingTableCard";

const PricingTable = () => {
  const { t } = useTranslation();

  let PricingTableCardArray = [];
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  PricingTableCardArray.push(
    <PricingTableCard
      title={t("pricing_table.basic")}
      price={"$15"}
      body={[
        <div className="selected">{t("pricing_table.responsive")}</div>,
        <div className="selected">{t("pricing_table.documentation")}</div>,
        <div className="unselected">{t("common.support")}</div>,
        <div className="unselected">{t("pricing_table.multimedia")}</div>,
        <div className="unselected">{t("pricing_table.creative")}</div>,
        <div className="unselected">{t("pricing_table.modern")}</div>,
        <div className="unselected">{t("pricing_table.free_update")}</div>
      ]}
      buttonText={t("common.get_started")}
      selected={selectedCardIndex === 0}
      index={0}
      setSelectedCardIndex={setSelectedCardIndex}
    />
  );
  PricingTableCardArray.push(
    <PricingTableCard
      title={t("pricing_table.standard")}
      price={"$30"}
      body={[
        <div className="selected">{t("pricing_table.responsive")}</div>,
        <div className="selected">{t("pricing_table.documentation")}</div>,
        <div className="selected">{t("common.support")}</div>,
        <div className="selected">{t("pricing_table.multimedia")}</div>,
        <div className="unselected">{t("pricing_table.creative")}</div>,
        <div className="unselected">{t("pricing_table.modern")}</div>,
        <div className="unselected">{t("pricing_table.free_update")}</div>
      ]}
      buttonText={t("common.get_started")}
      selected={selectedCardIndex === 1}
      index={1}
      setSelectedCardIndex={setSelectedCardIndex}
    />
  );
  PricingTableCardArray.push(
    <PricingTableCard
      title={t("pricing_table.premium")}
      price={"$50"}
      body={[
        <div className="selected">{t("pricing_table.responsive")}</div>,
        <div className="selected">{t("pricing_table.documentation")}</div>,
        <div className="selected">{t("common.support")}</div>,
        <div className="selected">{t("pricing_table.multimedia")}</div>,
        <div className="selected">{t("pricing_table.creative")}</div>,
        <div className="selected">{t("pricing_table.modern")}</div>,
        <div className="selected">{t("pricing_table.free_update")}</div>
      ]}
      buttonText={t("common.get_started")}
      selected={selectedCardIndex === 2}
      index={2}
      setSelectedCardIndex={setSelectedCardIndex}
    />
  );

  return (
    <CommonLayout
      title={t("pricing_table.pricing_table")}
      titleDescription={
        <span className="font-bold">
          {t("pricing_table.your_plance_your_choice")}
        </span>
      }
    >
      <div className="flex flex-wrap w-full justify-between gap-y-10 p-5">
        {PricingTableCardArray.map((card, index) => {
          return  <div key={"card"+index}>{card}</div> ;
        })}
      </div>
    </CommonLayout>
  );
};
export default PricingTable;
