"use client";

import { ForwardedRef, forwardRef, LegacyRef, useRef } from "react";
import { EYLButtonSize } from "./types";
import useRipple from "../../../yl-hooks/use-ripple";
import YlContainer from "../../yl-container/yl-container";
import YLSpinner from "@/components/yl-library/yl-spinner/yl-spinner";
import YlFlexContainer from "../../yl-flex-container/yl-flex-container";
import { IYLFlexContainerStyleProps } from "../../yl-flex-container/types";
import YLIcon from "../../yl-icon/yl-icon";
import YLText from "../../yl-text/yl-text";
import { IYLTextStyleProps } from "../../yl-text/types";
import chroma from "chroma-js";
import {
  IChildren,
  IClassName,
  IEvent,
} from "@/components/yl-utils/yl-global-interfaces";
import { EYLIcons, YLIcons } from "@/components/yl-utils/yl-global-enums";
import { IYLMaskedImageStyleProps } from "../../yl-masked-image/types";
import useYLBaseButtonStyle from "./use-yl-base-button-style";

export default forwardRef(function YLBaseButton(
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
    theme = {
      defaultColor: "#5072d7",
      buttonContainer: {},
      disabledLayer: {},
      button: {},
      icon: {},
      text: {},
    },
  }: IYLBaseButtonProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const ylButtonRef = useRef<HTMLButtonElement>(null);
  useRipple({
    rippleTrigger: ylButtonRef,
    options: {
      color:
        theme.rippleColor ||
        chroma(theme.defaultColor as string)
          .brighten(1)
          .alpha(0.66)
          .hex(),
    },
  });

  const {
    constructedButtonStyle,
    constructedContainerStyle,
    constructedIconStyle,
    constructedButtonTextStyle,
    constructedDisabledForegroundStyle,
    constructedLoadingStyle,
  } = useYLBaseButtonStyle({
    size,
    collapsed,
    rounded,
    loading,
  });

  return (
    <YlFlexContainer
      {...constructedContainerStyle}
      {...theme.buttonContainer}
      ref={ref}
      className={`yl-button  ${size ? "yl-button-" + size.toLowerCase() : ""} ${
        collapsed ? "yl-button-collapsed" : ""
      } ${className || ""}`}
    >
      <YlFlexContainer
        {...constructedButtonStyle}
        {...theme.button}
        dataChildHover
        dataChildActive
        dataParentActive
        dataParentHover
        tag="button"
        aria-label={ariaLabel || ""}
        ref={ylButtonRef as unknown as LegacyRef<HTMLDivElement>}
        className="yl-button-action"
        onClick={(e) => {
          onClick && onClick(e);
        }}
      >
        {icon && (
          <YLIcon
            className="yl-button-icon"
            name={icon}
            {...constructedIconStyle}
            {...theme.icon}
          />
        )}
        {label && (
          <YLText tag="span" {...constructedButtonTextStyle} {...theme.text}>
            {label}
          </YLText>
        )}
        {children && (
          <YLText tag="span" {...constructedButtonTextStyle} {...theme.text}>
            {children}
          </YLText>
        )}

        {rightIcon && (
          <YLIcon
            className="yl-button-icon yl-button-icon-right"
            name={rightIcon}
            {...constructedIconStyle}
            {...theme.icon}
          />
        )}
      </YlFlexContainer>

      {loading && (
        <YlFlexContainer
          {...constructedLoadingStyle}
          className="yl-button-spinner"
        >
          <YLSpinner />
        </YlFlexContainer>
      )}
      {disabled && (
        <YlContainer
          {...constructedDisabledForegroundStyle}
          {...theme.disabledLayer}
          className="yl-disabled-foreground"
        ></YlContainer>
      )}
    </YlFlexContainer>
  );
});

/************************Types*********************/

export interface IYLBaseButtonProps
  extends IClassName,
    Partial<IChildren>,
    IEvent {
  label?: string;

  size?: EYLButtonSize;

  rounded?: boolean;
  collapsed?: boolean;
  disabled?: boolean;

  icon?: YLIcons | EYLIcons | string;
  rightIcon?: string;
  loading?: boolean;

  ariaLabel?: any;

  theme?: IButtonTheme;
}

export interface IButtonTheme {
  defaultColor?: string;
  buttonContainer?: IYLFlexContainerStyleProps;
  button?: IYLFlexContainerStyleProps;
  disabledLayer?: IYLFlexContainerStyleProps;
  text?: IYLTextStyleProps;
  icon?: IYLMaskedImageStyleProps;
  rippleColor?: string;
}
