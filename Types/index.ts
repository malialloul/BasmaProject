import React, { DOMAttributes, ReactElement } from "react";
import { ReactNode } from "react";

export type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export type HeaderProps = {
  changeSelection: React.Dispatch<React.SetStateAction<number>>;
};

export type CardProps = {
  icon: JSX.Element;
  titleClassName: string;
  title: string;
  bodyClassName: string;
  body: string;
};

export type DropDownMenuProps = {
  titleClass: string;
  title: string;
  backgroundColor: string;
  children: JSX.Element | JSX.Element[];
};

export type ListProps = {
  listContentArray: [];
  title: string;
};

export type PricingTableCardProps = {
  index: number;
  setSelectedCardIndex: React.Dispatch<React.SetStateAction<number>>;
  selected: boolean;
  title: string;
  price: string;
  body: [];
  buttonText: string;
};

export type CommonLayoutProps = {
  backgroundColor: string;
  title: string;
  titleDescription: string;
  children: JSX.Element | JSX.Element[];
};
