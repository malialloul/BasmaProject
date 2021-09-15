import React from "react";
import { ListProps } from "../../Types";

const List = ({ listContentArray, title }: ListProps) => {
  const childrenArray = Array.from(listContentArray);
  return (
    <div className="flex-col space-y-3">
      <div className="font-bold">{title}</div>
      <div className="space-y-3">
        {childrenArray.map((content: any, index) => {
          return (
            <div key={index} className="flex items-center gap-x-3">
              {content.icon}
              <div className="text-gray-300">{content.contentText}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
