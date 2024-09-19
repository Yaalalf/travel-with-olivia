"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import "./base.css";
import { EYLButtonSize, EYLButtonStyle, YLButtonProps } from "./types";
import useRipple from "../../yl-hooks/use-ripple";
import YLIcon from "../yl-icon";
import YLSpinner from "../yl-spinner/yl-spinner";

export default forwardRef(function YLButton(
  {
    label,
    children,

    style = EYLButtonStyle.Filled,
    size = EYLButtonSize.Small,

    disabled,
    collapsed = false,
    rounded = false,
    icon,
    rightIcon,

    loading,

    className,

    onClick,

    ariaLabel,
  }: YLButtonProps,
  ref
) {
  const ylButtonContainerRef = useRef<HTMLDivElement>(null);
  const ylButtonRef = useRef<HTMLButtonElement>(null);

  useRipple({ rippleTrigger: ylButtonRef });

  useImperativeHandle(
    ref,
    () => {
      return {
        ref: ylButtonContainerRef.current,
      };
    },
    []
  );

  return (
    <div
      ref={ylButtonContainerRef}
      className={`yl-button yl-button-${style.toLowerCase()} ${
        size ? "yl-button-" + size.toLowerCase() : ""
      } ${collapsed ? "yl-button-collapsed" : ""} ${
        rounded ? "yl-button-rounded" : ""
      } ${className || ""}`}
    >
      <button
        aria-label={ariaLabel || ""}
        ref={ylButtonRef}
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
      </button>

      {loading && (
        <div className="yl-button-spinner">
          <YLSpinner />
        </div>
      )}
      {disabled && <div className="yl-disabled-foreground"></div>}
    </div>
  );
});
