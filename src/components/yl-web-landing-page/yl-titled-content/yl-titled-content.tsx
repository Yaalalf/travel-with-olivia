import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { IYLTitleStyle } from "../yl-title-headers/yl-title-header-double-text/yl-title-header-double-text";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import {
  IClassName,
  TextAlign,
  TextTransform,
} from "@/components/yl-utils/yl-global-interfaces";
import {
  IYLFlexContainerProps,
  IYLFlexContainerStyleProps,
} from "@/components/yl-layouts/yl-flex-container/types";
import { IYLTextHeaderStyleProps } from "@/components/yl-layouts/yl-text-header/types";
import { IYLTextStyleProps } from "@/components/yl-layouts/yl-text/types";
import { ReactNode } from "react";
import YLTitleHeaderDoubleTextInvert from "../yl-title-headers/yl-title-header-double-text-invert/yl-title-header-double-text-invert";

export default function YLTitledContent({
  className,

  contentText,
  primaryText,
  secondaryText,

  inlineSize = "100%",
  textAlign = "left",
  textTransform = "none",
  invertTitle = false,

  containerStyle,
  contentTextStyle,
  primaryTitleStyle,
  secondaryTitleStyle,
  containerTitleStyle,
}: IYLTitledContentProps) {
  return (
    <YLFlexContainer
      className={`${className || ""} yl-titled-content`}
      {...defaultContainerStyle}
      {...{ inlineSize }}
      {...containerStyle}
    >
      <YLTitleHeaderDoubleTextInvert
        className="yl-title-content-title"
        {...{
          primaryText,
          secondaryText,
          textAlign,
          textTransform,
          invert: invertTitle,
        }}
        {...{
          containerStyle: containerTitleStyle
            ? { ...defaultTitleHeaderContainerStyle, ...containerTitleStyle }
            : defaultTitleHeaderContainerStyle,
          primaryTitleStyle: primaryTitleStyle
            ? { ...defaultPrimaryTitleStyle, ...primaryTitleStyle }
            : defaultPrimaryTitleStyle,
          secondaryTitleStyle: secondaryTitleStyle
            ? { ...defaultSecondaryTitleStyle, ...secondaryTitleStyle }
            : defaultSecondaryTitleStyle,
        }}
      ></YLTitleHeaderDoubleTextInvert>
      <YLText
        className="yl-title-content-text"
        tag="p"
        {...defaultContentTextStyle}
        {...{ textAlign }}
        {...contentTextStyle}
      >
        {contentText}
      </YLText>
    </YLFlexContainer>
  );
}

/************************DefaultValues*********************/

const defaultContainerStyle: IYLFlexContainerStyleProps = {
  flexDirection: "column",
  gap: "12px",
  mediaQuery: { "360-1024": { inlineSize: "90%", maxInlineSize: "500px" } },
};

const defaultTitleHeaderContainerStyle: IYLFlexContainerStyleProps = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  mediaQuery: { "360-1024": { inlineSize: "100%" } },
};

export const defaultPrimaryTitleStyle: IYLTitleStyle = {
  inlineSize: "100%",
  fontSize: "62px",
  lineHeight: "62px",
  fontFamily: "Inter",
  fontWeight: "900",

  order: "1",
  mediaQuery: { "360-1024": { fontSize: "32px", lineHeight: "36px" } },
};

export const defaultSecondaryTitleStyle: IYLTextHeaderStyleProps = {
  inlineSize: "100%",
  fontSize: "32px",
  lineHeight: "32px",

  fontFamily: "Inter",
  fontWeight: "600",
  mediaQuery: { "360-1024": { fontSize: "20px", lineHeight: "20px" } },
};
export const defaultContentTextStyle: IYLTextStyleProps = {
  inlineSize: "100%",
  fontSize: "18px",
  lineHeight: "24px",

  fontFamily: "Inter",
  fontWeight: "400",
  mediaQuery: { "360-1024": { fontSize: "16px", lineHeight: "20px" } },
};
/************************Types*********************/

export interface IYLTitledContentProps extends IClassName {
  primaryText?: string | ReactNode;
  secondaryText?: string | ReactNode;
  contentText?: string | ReactNode;

  inlineSize?: string;
  textAlign?: TextAlign;
  textTransform?: TextTransform;
  invertTitle?: boolean;

  containerStyle?: IYLFlexContainerProps;
  containerTitleStyle?: IYLFlexContainerProps;
  primaryTitleStyle?: IYLTitleStyle;
  secondaryTitleStyle?: IYLTitleStyle;
  contentTextStyle?: IYLTextStyleProps;
}
