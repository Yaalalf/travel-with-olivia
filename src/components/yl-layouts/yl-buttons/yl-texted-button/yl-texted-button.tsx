"use client";

import { ForwardedRef, forwardRef } from "react";

import { EYLButtonSize } from "../yl-base-button/types";
import { IYLBaseButtonProps } from "../yl-base-button/yl-base-button";
import YlBaseButton from "../yl-base-button/yl-base-button";
import useYLTextedButtonStyle from "./use-yl-texted-button-style";

export default forwardRef(function YLTextedButton(
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

  const defaultTextedTheme = useYLTextedButtonStyle({
    ...defaultColorTheme,
    ...theme,
  });

  console.log({
    ...defaultColorTheme,
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
      theme={{ ...defaultColorTheme, ...defaultTextedTheme }}
    >
      {children}
    </YlBaseButton>
  );
});

/************************Types*********************/

export interface IYLFilledButtonProps extends IYLBaseButtonProps {}
