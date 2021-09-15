import classNames from "classnames";
import React from "react";
import { PricingTableCardProps } from "../../Types";

const PricingTableCard = ({
  selected,
  title,
  price,
  body,
  buttonText,
  index,
  setSelectedCardIndex
}: PricingTableCardProps) => {
  return (
    <div
      onClick={() => setSelectedCardIndex(index)}
      className={classNames(
        "cursor-pointer relative h-528  pricingTableCard  text-center w-80 ",
        {
          pricingTableCardUnSelected: !selected,
          "bg-primary": selected
        }
      )}
    >
      <br />
      <div
        className={classNames("font-bold text-2xl", {
          "text-white": selected
        })}
      >
        {title}
      </div>
      <br />
      <div
        className={classNames("font-bold text-4xl ", {
          "text-white": selected,
          "text-primary": !selected
        })}
      >
        {price}
      </div>
      <br />
      <ul className="font-bold">
        {body.map((text, index) => {
          return <li key={"li"+index} className="w-full mt-4">{text}</li>;
        })}
      </ul>
      <br />
      <br />

      <div className="absolute -bottom-5  w-full left-0.5  text-center">
        <button className="rounded p-3 w-40 text-white  bg-orange">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default PricingTableCard;
