import { IYLBackgroundColorProps } from "@/components/yl-layouts/yl-background-color/types";
import YLBackgroundContainer, {
  IYLBackgroundContainerProps,
} from "@/components/yl-web-landing-page/yl-background-container/yl-background-container";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import {
  IYLFlexContainerProps,
  IYLFlexContainerStyleProps,
} from "@/components/yl-layouts/yl-flex-container/types";

import { EWhiteSwatch } from "@/components/yl-utils/yl-global-enums";
import {
  IChildren,
  IClassName,
} from "@/components/yl-utils/yl-global-interfaces";
import { IYLTitleStyle } from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text/yl-title-header-double-text";
import YLTitledContent, {
  IYLTitledContentProps,
} from "@/components/yl-web-landing-page/yl-titled-content/yl-titled-content";
import { IYLBackgroundCarrouselProps } from "@/components/yl-layouts/yl-background-carrousel/yl-background-carrousel";
import YLBackgroundCarrouselContainer from "../../yl-background-carrousel-container/yl-background-carrousel-container";

export default function YLBackgroundCarrouselTitleContentSection({
  className,
  children,

  primaryText,
  secondaryText,
  contentText,

  imgUrls,
  blockSize = "680px",
  textContentContainerInlineSize = "900px",
  textAlign = "left",
  textTransform = "none",

  containerStyle,

  contentTextStyle,
  primaryTitleStyle,
  secondaryTitleStyle,
  titleContentContainerStyle,
  containerTitleStyle,

  backgroundColorStyle,
  backgroundFilterStyle,
  backgroundImageStyle,
  backgroundContainerStyle,
}: IYLBackgroundCarrouselTitleSectionProps) {
  return (
    <YLBackgroundCarrouselContainer
      {...{ imgUrls, blockSize }}
      className={className || ""}
      {...{
        containerStyle: {
          tag: "section",
          ...defaultBackgroundContainerStyle,
          ...backgroundContainerStyle,
          ...containerStyle,
        },
        backgroundColorStyle: {
          ...defaultBackgroundColorStyle,
          ...backgroundColorStyle,
        },
        backgroundImageStyle,
        backgroundFilterStyle,
      }}
    >
      <YLTitledContent
        {...{
          contentText,
          primaryText,
          secondaryText,
          textAlign,
          textTransform,
          inlineSize: textContentContainerInlineSize,
          primaryTitleStyle: {
            ...defaultTitlePrimaryTextColorStyle,
            ...primaryTitleStyle,
          },
          secondaryTitleStyle: {
            ...defaultTitleSecondaryTextColorStyle,
            ...secondaryTitleStyle,
          },
          contentTextStyle: {
            ...defaultTitleContentTextColorStyle,
            ...contentTextStyle,
          },
          containerStyle: { ...titleContentContainerStyle },
          containerTitleStyle: { ...containerTitleStyle },
        }}
      />
      <YLContainer>{children}</YLContainer>
    </YLBackgroundCarrouselContainer>
  );
}
/************************DefaultValues*********************/
const defaultBackgroundContainerStyle: IYLFlexContainerProps = {
  flexDirection: "column",
  mediaQuery: {
    "360-1024": { blockSize: "400px" },
  },
};
const defaultBackgroundColorStyle: IYLBackgroundColorProps = { opacity: "0.4" };

const defaultTitlePrimaryTextColorStyle: IYLTitleStyle = {
  fontSize: "72px",
  color: EWhiteSwatch.white1,
  textShadow: "0px 3px 3px #00000022",
};
const defaultTitleSecondaryTextColorStyle: IYLTitleStyle = {
  fontSize: "28px",
  color: EWhiteSwatch.white1,
  textShadow: "0px 3px 3px #00000022",
};
const defaultTitleContentTextColorStyle: IYLTitleStyle = {
  color: EWhiteSwatch.white2,
  textShadow: "0px 3px 3px #00000022",
  fontSize: "16px",
};
/************************Types*********************/

export interface IYLBackgroundCarrouselTitleSectionProps
  extends IClassName,
    Partial<IChildren>,
    IYLBackgroundCarrouselProps,
    Omit<IYLBackgroundContainerProps, "flexContainerStyle">,
    Omit<IYLTitledContentProps, "inlineSize" | "containerStyle"> {
  containerStyle?: IYLFlexContainerStyleProps;
  textContentContainerInlineSize?: string;
  titleContentContainerStyle?: IYLFlexContainerStyleProps;
  backgroundContainerStyle?: IYLFlexContainerStyleProps;
}
