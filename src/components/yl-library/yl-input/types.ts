import { IClassName } from "@/components/yl-utils/yl-global-interfaces";
import { ReactNode } from "react";

export interface IYLInputProps extends IClassName {
  value?: number | string;
  onChange?: (value: string) => void;

  placeholder?: string;
  inputContainerClassName?: string;

  style?: string;

  label?: string;

  labelSlot?: ReactNode;
  postfixSlot?: ReactNode;
  prefixSlot?: ReactNode;
  afterSlot?: ReactNode;
  beforeSlot?: ReactNode;
}
