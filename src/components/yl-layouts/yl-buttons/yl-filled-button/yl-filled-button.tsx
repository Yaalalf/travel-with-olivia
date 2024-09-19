"use client";

import { ForwardedRef, forwardRef } from "react";

import { EYLButtonSize } from "../yl-base-button/types";
import useYLFilledButtonStyle from "./use-yl-filled-button-style";
import { IYLBaseButtonProps } from "../yl-base-button/yl-base-button";
import YlBaseButton from "../yl-base-button/yl-base-button";

export default forwardRef(function YLFilledButton(
  {
    label,
    children,
    className,
    onClick,

    size = EYLButtonSize.Small,

    disabled = false,
    collapsed = false,
    rounded = false,
    icon,
    rightIcon,

    loading,

    ariaLabel,
    theme,
  }: IYLFilledButtonProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const defaultColorTheme = { defaultColor: theme?.defaultColor || "#5072d7" };

  const defaultFilledTheme = useYLFilledButtonStyle({
    ...defaultColorTheme,
    ...theme,
  });

  return (
    <YlBaseButton
      ref={ref}
      className={`yl-button-filled ${className || ""}`}
      onClick={onClick}
      {...{
        label,
        collapsed,
        disabled,
        loading,
        icon,

        rounded,
        rightIcon,
        size,
        ariaLabel,
      }}
      theme={{
        ...defaultColorTheme,
        ...defaultFilledTheme,
      }}
    >
      {children}
    </YlBaseButton>
  );
});

/************************Types*********************/

export interface IYLFilledButtonProps extends IYLBaseButtonProps {}
