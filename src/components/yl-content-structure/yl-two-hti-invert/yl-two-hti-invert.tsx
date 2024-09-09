import { IYLBackgroundImageStyleProps } from "@/components/yl-layouts/yl-background-image/types";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import { IYLFlexContainerStyleProps } from "@/components/yl-layouts/yl-flex-container/types";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { IYLTextHeaderStyleProps } from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import { IYLTextStyleProps } from "@/components/yl-layouts/yl-text/types";
import YLText from "@/components/yl-layouts/yl-text/yl-text";

export default function YLTwoHTIInvert({
  firstHTI,
  secondHTI,
  imageStyle,
  textHeaderStyle,
  textStyle,
}: IYLTwoHTIInvert) {
  return (
    <YLFlexContainer {...defaultMainContainerValues}>
      <YLFlexContainer
        {...defaultInnerContainerValues}
        paddingBlockStart="20px"
      >
        <YLTextHeader {...defaultTextHeaderStyle} {...textHeaderStyle}>
          {firstHTI?.textHeader}
        </YLTextHeader>
        <YLText {...defaultTextStyle} {...textStyle}>
          {firstHTI?.textContent}
        </YLText>
        <YLBackgroundImage
          {...defaultBackgroundValues}
          {...imageStyle}
          backgroundImage={firstHTI && `url("${firstHTI}")`}
        ></YLBackgroundImage>
      </YLFlexContainer>
      <YLFlexContainer {...defaultInnerContainerValues} paddingBlockEnd="20px">
        <YLBackgroundImage
          {...defaultBackgroundValues}
          {...imageStyle}
          backgroundImage={secondHTI && `url("${secondHTI}")`}
        ></YLBackgroundImage>
        <YLTextHeader {...defaultTextHeaderStyle} {...textHeaderStyle}>
          {secondHTI?.textHeader}
        </YLTextHeader>
        <YLText {...defaultTextStyle} {...textStyle}>
          {secondHTI?.textContent}
        </YLText>
      </YLFlexContainer>
    </YLFlexContainer>
  );
}

export interface IYLTwoHTIInvert {
  firstHTI?: IHeaderTextImage;
  secondHTI?: IHeaderTextImage;
  textHeaderStyle?: IYLTextHeaderStyleProps;
  textStyle?: IYLTextStyleProps;
  imageStyle?: IYLBackgroundImageStyleProps;
}

export interface IHeaderTextImage {
  textHeader: string;
  textContent: string;
  imageUrl: string;
}

/************************DefaultValues*********************/
const defaultMainContainerValues: IYLFlexContainerStyleProps = {
  inlineSize: "1000px",
  blockSize: "720px",
  paddingBlock: "80px",
  gap: "20px",
  mediaQuery: {
    "360-1024": {
      inlineSize: "100%",
      flexDirection: "column",
      blockSize: "auto",
      paddingBlock: "20px",
    },
  },
};
const defaultInnerContainerValues: IYLFlexContainerStyleProps = {
  flexDirection: "column",
  alignItems: "flex-start",
  blockSize: "100%",
  inlineSize: "50%",
  gap: "12px",
  mediaQuery: {
    "360-1024": {
      inlineSize: "100%",
      maxInlineSize: "500px",
      blockSize: "auto",
      paddingInline: "32px",
      alignItems: "center",
    },
  },
};

const defaultBackgroundValues: IYLBackgroundImageStyleProps = {
  blockSize: "70%",
  position: "relative",
  backgroundSize: "cover",
  mediaQuery: {
    "360-1024": {
      inlineSize: "100%",
      blockSize: "280px",
    },
  },
};

export const defaultTextHeaderStyle: IYLTextHeaderStyleProps = {
  fontSize: "30px",
  textTransform: "capitalize",
  fontFamily: "Nunito",
  fontWeight: "700",
  textAlign: "left",
  lineHeight: "36px",
  color: "#222222",
  mediaQuery: {
    "360-1024": {
      textAlign: "center",
      fontSize: "22px",
    },
  },
};
export const defaultTextStyle: IYLTextStyleProps = {
  fontSize: "16px",
  textTransform: "capitalize",
  fontFamily: "sans-serif",
  fontWeight: "400",
  textAlign: "left",
  lineHeight: "22px",
  color: "#222222",
  mediaQuery: {
    "360-1024": {
      textAlign: "center",
    },
  },
};
