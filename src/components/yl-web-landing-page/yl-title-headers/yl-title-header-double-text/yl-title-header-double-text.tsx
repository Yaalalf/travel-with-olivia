import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLFlexItem from "@/components/yl-layouts/yl-flex-item/yl-flex-item";

import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import { EYLMediaQueryBreakPoints } from "@/components/yl-utils/yl-global-enums";
import {
  IYLFlexContainerProps,
  IYLFlexContainerStyleProps,
} from "@/components/yl-layouts/yl-flex-container/types";
import {
  IYLTextHeaderProps,
  IYLTextHeaderStyleProps,
} from "@/components/yl-layouts/yl-text-header/types";
import {
  IClassName,
  IFlexChild,
  TextAlign,
  TextTransform,
} from "@/components/yl-utils/yl-global-interfaces";
import { ReactNode } from "react";

export default function YLTitleHeaderDoubleText({
  className,

  primaryText,
  secondaryText,

  inlineSize = "100%",
  textAlign = "left",
  textTransform = "none",

  containerStyle,
  primaryTitleStyle,
  secondaryTitleStyle,
}: IYLTitleHeaderDoubleTextProps) {
  return (
    <YLFlexContainer
      className={`${className || ""} yl-title-header-double-text`}
      {...defaultContainerStyle}
      {...{ inlineSize }}
      {...containerStyle}
    >
      <YLFlexItem
        className="yl-title-header-double-text-primary-container"
        order={primaryTitleStyle?.order}
        inlineSize="100%"
      >
        <YLTextHeader
          className="yl-title-header-double-text-primary-text"
          {...defaultPrimaryTitleStyle}
          {...{ textAlign, textTransform }}
          {...primaryTitleStyle}
        >
          {primaryText}
        </YLTextHeader>
      </YLFlexItem>
      <YLFlexItem
        className="yl-title-header-double-text-secondary-container"
        order={secondaryTitleStyle?.order}
        inlineSize="100%"
      >
        <YLTextHeader
          className="yl-title-header-double-text-secondary-text"
          {...defaultSecondaryTitleStyle}
          {...{ textAlign, textTransform }}
          {...secondaryTitleStyle}
        >
          {secondaryText}
        </YLTextHeader>
      </YLFlexItem>
    </YLFlexContainer>
  );
}
/************************DefaultValues*********************/
const defaultContainerStyle: IYLFlexContainerStyleProps = {
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  mediaQuery: {
    [EYLMediaQueryBreakPoints.mobileFull]: {
      inlineSize: "90%",
      maxInlineSize: "500px",
      gap: "4px",
    },
  },
};

const defaultPrimaryTitleStyle: IYLTextHeaderStyleProps = {
  inlineSize: "100%",
  fontSize: "52px",
  lineHeight: "56px",
  fontFamily: "Nunito",
  fontWeight: "700",
  textAlign: "center",
  mediaQuery: {
    [EYLMediaQueryBreakPoints.mobileFull]: {
      fontSize: "32px",
      lineHeight: "38px",
    },
  },
};

const defaultSecondaryTitleStyle: IYLTextHeaderStyleProps = {
  inlineSize: "100%",
  fontSize: "28px",
  lineHeight: "32px",

  fontFamily: "Nunito",
  fontWeight: "400",
  textAlign: "center",

  mediaQuery: {
    [EYLMediaQueryBreakPoints.mobileFull]: {
      fontSize: "18px",
      lineHeight: "22px",
    },
  },
};

/************************Types*********************/

export interface IYLTitleHeaderDoubleTextProps extends IClassName {
  primaryText?: string | ReactNode;
  secondaryText?: string | ReactNode;

  textAlign?: TextAlign;
  textTransform?: TextTransform;
  inlineSize?: string;

  containerStyle?: IYLFlexContainerProps;

  primaryTitleStyle?: IYLTitleStyle;
  secondaryTitleStyle?: IYLTitleStyle;
}

export interface IYLTitleStyle extends IYLTextHeaderProps, IFlexChild {}
