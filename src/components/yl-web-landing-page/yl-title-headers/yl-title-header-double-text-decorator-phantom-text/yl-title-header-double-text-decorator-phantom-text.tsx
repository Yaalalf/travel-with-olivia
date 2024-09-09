import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { IYLTitleStyle } from "../yl-title-header-double-text/yl-title-header-double-text";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import { IYLTextHeaderStyleProps } from "@/components/yl-layouts/yl-text-header/types";
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
import { IYLContainerStyleProps } from "@/components/yl-layouts/yl-container/types";
import YLTitleHeaderDoubleTextInvert from "../yl-title-header-double-text-invert/yl-title-header-double-text-invert";

export default function YLTitleHeaderDoubleTextDecoratorPhantomText({
  className,
  primaryText,
  secondaryText,
  phantomText,

  inlineSize,
  textAlign,
  textTransform,
  invertTitle = false,

  containerStyle,
  decoratorLineStyle,
  phantomTextContainerStyle,
  phantomTextStyle,

  titleStyle,
}: IYLTitleHeaderDoubleTextDecoratorPhantomText) {
  return (
    <YLFlexContainer
      className={`${
        className || ""
      } yl-title-header-double-text-decorator-phantom-text`}
      {...{ inlineSize }}
      {...defaultContainerStyle}
      {...containerStyle}
    >
      <YLContainer
        className=" yl-phantom-text-container"
        {...defaultPhantomTextContainerStyle}
        {...phantomTextContainerStyle}
      >
        <YLText
          className=" yl-phantom-text"
          tag="span"
          {...{ textTransform }}
          {...defaultPhantomTextHeaderStyle}
          {...phantomTextStyle}
        >
          {phantomText || "Lorem"}
        </YLText>
      </YLContainer>
      <YLContainer
        className="yl-decorator-line"
        {...defaultDecoratorLineStyle}
        {...decoratorLineStyle}
      />
      <YLTitleHeaderDoubleTextInvert
        {...{
          inlineSize,
          textAlign,
          textTransform,
          primaryText,
          secondaryText,
          invert: invertTitle,
        }}
        containerStyle={{
          ...defaultContainerTextHeaderStyle,
          ...titleStyle?.containerStyle,
        }}
        primaryTitleStyle={{
          ...defaultPrimaryTextHeaderStyle,
          ...titleStyle?.primaryTitleStyle,
        }}
        secondaryTitleStyle={{
          ...defaultSecondaryTextHeaderStyle,
          ...titleStyle?.secondaryTitleStyle,
        }}
      />
    </YLFlexContainer>
  );
}

/************************DefaultValues*********************/
const defaultContainerStyle: IYLFlexContainerStyleProps = {
  marginInlineStart: "20px",
  gap: "48px",
  mediaQuery: { "360-1024": { gap: "8px" } },
};
const defaultDecoratorLineStyle: IYLContainerStyleProps = {
  inlineSize: "8px",
  blockSize: "120px",
  backgroundColor: "black",
};
const defaultContainerTextHeaderStyle: IYLFlexContainerStyleProps = {
  alignItems: "flex-start",
  gap: "0px",
};

const defaultPrimaryTextHeaderStyle: IYLTextHeaderStyleProps = {
  fontSize: "48px",
  fontFamily: "Nunito",
  fontWeight: "900",

  lineHeight: "60px",

  color: "#222222",
  mediaQuery: {
    "360-1024": {
      fontSize: "24px",
      lineHeight: "28px",
    },
  },
};
const defaultSecondaryTextHeaderStyle: IYLTextHeaderStyleProps = {
  fontSize: "20px",
  fontFamily: "Nunito",
  fontWeight: "500",

  lineHeight: "32px",

  color: "#222222",
  mediaQuery: {
    "360-1024": {
      fontSize: "20px",
    },
  },
};

const defaultPhantomTextContainerStyle: IYLContainerStyleProps = {
  position: "absolute",
  right: "-10%",
};

const defaultPhantomTextHeaderStyle: IYLTextHeaderStyleProps = {
  fontSize: "140px",
  fontFamily: "Nunito",
  fontWeight: "900",
  lineHeight: "140px",

  color: "#00000011",
  mediaQuery: {
    "360-1024": {
      fontSize: "80px",
      lineHeight: "80px",
    },
  },
};

/************************Types*********************/

export interface IYLTitleHeaderDoubleTextDecoratorPhantomText
  extends IClassName {
  primaryText?: string;
  secondaryText?: string;
  phantomText?: string;

  inlineSize?: string;
  invertTitle?: boolean;
  textAlign?: TextAlign;
  textTransform?: TextTransform;

  containerStyle?: IYLFlexContainerStyleProps;
  decoratorLineStyle?: IYLContainerStyleProps;
  titleStyle?: {
    containerStyle?: IYLFlexContainerProps;
    primaryTitleStyle?: IYLTitleStyle;
    secondaryTitleStyle?: IYLTitleStyle;
  };

  phantomTextContainerStyle?: IYLContainerStyleProps;
  phantomTextStyle?: IYLTextHeaderStyleProps;
}
