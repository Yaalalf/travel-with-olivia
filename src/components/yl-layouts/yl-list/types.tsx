import {
  EYLCSSProperties,
  YLCSSProperties,
} from "@/components/yl-utils/yl-global-enums";
import {
  IYLFlexContainerStyle,
  IYLFlexContainerStyleBaseProps,
} from "../yl-flex-container/types";
import {
  IChildren,
  IClassName,
  IEvent,
  IList,
  IYLMediaQuery,
} from "@/components/yl-utils/yl-global-interfaces";
import { ReactNode } from "react";

export const YL_LIST_NAME = "--yl-list";

export type YLListName = "--yl-list";

export type YLListStyle = `${YLListName}-${Extract<
  YLCSSProperties,
  `${EYLCSSProperties.listStyle}`
>}`;

export interface IYLListStyle
  extends Partial<Record<YLListStyle, string>>,
    IYLFlexContainerStyle {}

export interface IYLListProps<T>
  extends IYLListStyleProps,
    IClassName,
    IEvent,
    Partial<IChildren> {
  data?: T[];
  builder?: (item: T, index?: number) => ReactNode;
  itemClassName?: string;
  listKey?: keyof T;
}

export interface IYLListStyleProps
  extends IYLFlexContainerStyleBaseProps,
    IList,
    IYLMediaQuery<IYLListStyleProps> {}
