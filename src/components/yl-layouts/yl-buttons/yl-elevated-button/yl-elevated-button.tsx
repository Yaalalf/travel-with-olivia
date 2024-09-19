"use client";

import { ForwardedRef, forwardRef } from "react";

import { EYLButtonSize } from "../yl-base-button/types";
import { IYLBaseButtonProps } from "../yl-base-button/yl-base-button";
import YlBaseButton from "../yl-base-button/yl-base-button";
import useYLElevatedButtonStyle from "./use-yl-elevated-button-style";
import chroma from "chroma-js";

export default forwardRef(function YLElevatedButton(
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
  const defaultColorTheme = {
    defaultColor: theme?.defaultColor || "#5072d7",
    rippleColor:
      theme?.rippleColor ||
      chroma(theme?.defaultColor || "#5072d7")
        .alpha(0.4)
        .hex(),
  };

  const defaultElevatedTheme = useYLElevatedButtonStyle({
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
      theme={{ ...defaultColorTheme, ...defaultElevatedTheme }}
    >
      {children}
    </YlBaseButton>
  );
});

/************************Types*********************/

export interface IYLFilledButtonProps extends IYLBaseButtonProps {}
