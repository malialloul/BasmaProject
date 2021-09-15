import React from "react";
import { CardProps } from "../../Types";

const Card = ({
  icon,
  titleClassName,
  title,
  bodyClassName,
  body
}: CardProps) => {
  return (
    <div className="bg-white  break-words   text-center rounded w-96 p-7">
      <div className="flex justify-center items-center w-full h-20">
        {icon}
      </div>
      <div className="flex-col gap-y-10">
        <span className={titleClassName}>{title}</span>
        <div className="flex justify-center">
          <div
            className={
              "w-64 flex justify-center  text-center mt-10 " +
              bodyClassName
            }
          >
            {body}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
