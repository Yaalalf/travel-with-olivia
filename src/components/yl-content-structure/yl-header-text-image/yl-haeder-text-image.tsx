import { IYLBackgroundImageStyleProps } from "@/components/yl-layouts/yl-background-image/types";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import { IYLFlexContainerStyleProps } from "@/components/yl-layouts/yl-flex-container/types";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { IYLTextHeaderStyleProps } from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import { IYLTextStyleProps } from "@/components/yl-layouts/yl-text/types";
import YLText from "@/components/yl-layouts/yl-text/yl-text";

export default function YLHeaderTextImage({
  imageUrl,
  textContent,
  textHeader,
  flexContainerStyle,
  imageStyle,
  textHeaderStyle,
  textStyle,
}: IYLHeaderTextImage) {
  return (
    <YLFlexContainer {...defaultInnerContainerValues} {...flexContainerStyle}>
      <YLBackgroundImage
        {...defaultBackgroundValues}
        {...imageStyle}
        backgroundImage={imageUrl && `url("${imageUrl}")`}
      ></YLBackgroundImage>
      <YLTextHeader {...defaultTextHeaderStyle} {...textHeaderStyle}>
        {textHeader}
      </YLTextHeader>
      <YLText {...defaultTextStyle} {...textStyle}>
        {textContent}
      </YLText>
    </YLFlexContainer>
  );
}
export interface IYLHeaderTextImage {
  textContent?: string;
  textHeader?: string;
  imageUrl?: string;
  flexContainerStyle?: IYLFlexContainerStyleProps;
  textHeaderStyle?: IYLTextHeaderStyleProps;
  textStyle?: IYLTextStyleProps;
  imageStyle?: IYLBackgroundImageStyleProps;
}

/************************DefaultValues*********************/

const defaultInnerContainerValues: IYLFlexContainerStyleProps = {
  paddingBlock: "20px",
  flexDirection: "column",
  alignItems: "flex-start",
  blockSize: "auto",
  inlineSize: "400px",
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
  blockSize: "300px",
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
