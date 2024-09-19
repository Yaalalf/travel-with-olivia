"use client";

import { ForwardedRef, forwardRef } from "react";

import { EYLButtonSize } from "../yl-base-button/types";
import { IYLBaseButtonProps } from "../yl-base-button/yl-base-button";
import YlBaseButton from "../yl-base-button/yl-base-button";
import useYLOutlinedButtonStyle from "./use-yl-outlined-button-style";

export default forwardRef(function YLOutlinedButton(
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

  const defaultOutlinedTheme = useYLOutlinedButtonStyle({
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
      theme={{ ...defaultColorTheme, ...defaultOutlinedTheme }}
    >
      {children}
    </YlBaseButton>
  );
});

/************************Types*********************/

export interface IYLFilledButtonProps extends IYLBaseButtonProps {}
