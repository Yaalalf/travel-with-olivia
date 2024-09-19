"use client";

import { ForwardedRef, forwardRef, ReactNode } from "react";

import { EYLButtonSize } from "../yl-base-button/types";
import { IYLBaseButtonProps } from "../yl-base-button/yl-base-button";
import YlBaseButton from "../yl-base-button/yl-base-button";
import YlFilledButton from "../yl-filled-button/yl-filled-button";
import YlTextedButton from "../yl-texted-button/yl-texted-button";
import YlOutlinedButton from "../yl-outlined-button/yl-outlined-button";
import YlElevatedButton from "../yl-elevated-button/yl-elevated-button";

export default forwardRef(function YLButton(
  {
    label,
    children,
    className,
    onClick,

    size = EYLButtonSize.Small,
    styleType = "filled",
    disabled = false,
    collapsed = false,
    rounded = false,
    icon,
    rightIcon,

    loading,

    ariaLabel,
    theme,
  }: IYLButtonProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return ButtonFactory({
    label,
    ariaLabel,
    children,
    className,
    collapsed,
    disabled,
    icon,
    loading,
    onClick,
    rightIcon,
    rounded,
    size,
    styleType,
    theme,
    ref,
  });
});

function ButtonFactory(props: IYLButtonProps): ReactNode {
  switch (props.styleType) {
    case "filled":
      return <YlFilledButton {...props}>{props.children}</YlFilledButton>;
    case "outlined":
      return <YlOutlinedButton {...props}>{props.children}</YlOutlinedButton>;
    case "texted":
      return <YlTextedButton {...props}>{props.children}</YlTextedButton>;
    case "elevated":
      return <YlElevatedButton {...props}>{props.children}</YlElevatedButton>;
  }
}
/************************Types*********************/

export interface IYLButtonProps extends IYLBaseButtonProps {
  styleType?: ButtonStyleType;
  ref?: ForwardedRef<HTMLDivElement>;
}

export type ButtonStyleType = "filled" | "outlined" | "texted" | "elevated";
