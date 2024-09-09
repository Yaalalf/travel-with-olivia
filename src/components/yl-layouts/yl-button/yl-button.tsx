"use client";

import { ForwardedRef, forwardRef, LegacyRef, useRef } from "react";
// import "./base.css";
import { EYLButtonSize, EYLButtonStyle, YLButtonProps } from "./types";
import useRipple from "../../yl-hooks/use-ripple";
import YlContainer from "../yl-container/yl-container";
import YLIcon from "@/components/yl-library/yl-icon";
import YLSpinner from "@/components/yl-library/yl-spinner/yl-spinner";
import YlFlexContainer from "../yl-flex-container/yl-flex-container";
import { IYLFlexContainerStyleProps } from "../yl-flex-container/types";
import { IYLContainerStyleProps } from "../yl-container/types";

export default forwardRef(function YLButton(
  {
    label,
    children,
    className,
    onClick,

    style = EYLButtonStyle.Filled,
    size = EYLButtonSize.Small,

    disabled,
    collapsed = false,
    rounded = false,
    icon,
    rightIcon,

    loading,

    ariaLabel,
  }: YLButtonProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const ylButtonRef = useRef<HTMLButtonElement>(null);

  useRipple(ylButtonRef);

  return (
    <YlFlexContainer
      {...defaultContainerStyle}
      ref={ref}
      className={`yl-button yl-button-${style.toLowerCase()} ${
        size ? "yl-button-" + size.toLowerCase() : ""
      } ${collapsed ? "yl-button-collapsed" : ""} ${
        rounded ? "yl-button-rounded" : ""
      } ${className || ""}`}
    >
      <YlFlexContainer
        {...defaultButtonActionContainerStyle}
        tag="button"
        aria-label={ariaLabel || ""}
        ref={ylButtonRef as unknown as LegacyRef<HTMLDivElement>}
        className="yl-button-action"
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        {icon && <YLIcon className="yl-button-icon" icon={icon} />}
        {label}
        {children}
        {rightIcon && (
          <YLIcon
            className="yl-button-icon yl-button-icon-right"
            icon={rightIcon}
          />
        )}
      </YlFlexContainer>

      {loading && (
        <div className="yl-button-spinner">
          <YLSpinner />
        </div>
      )}
      {disabled && <div className="yl-disabled-foreground"></div>}
    </YlFlexContainer>
  );
});
/************************DefaultValues*********************/

const defaultContainerStyle: IYLFlexContainerStyleProps = {
  blockSize: "56px",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",

  borderRadius: "8px",
  border: "none",
  backgroundColor: "white",

  overflow: "hidden",
  cursor: "pointer",
};

const defaultButtonActionContainerStyle: IYLFlexContainerStyleProps = {
  inlineSize: "100%",
  blockSize: "100%",
  paddingInline: "20px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  userSelect: "none",
  cursor: "pointer",
};
