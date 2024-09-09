import {
  ETag,
  IChildren,
  IClassName,
} from "@/components/yl-utils/yl-global-interfaces";
import { YLBackdropFilter } from "../../yl-layouts/yl-backdrop-filter/yl-backdrop-filter";
import { YLBackgroundColor } from "../../yl-layouts/yl-background-color/yl-background-color";
import { YLBackgroundImage } from "../../yl-layouts/yl-background-image/yl-background-image";
import YLFlexContainer from "../../yl-layouts/yl-flex-container/yl-flex-container";
import { IYLFlexContainerProps } from "../../yl-layouts/yl-flex-container/types";
import { IYLBackgroundImageProps } from "../../yl-layouts/yl-background-image/types";
import { IYLBackdropFilterProps } from "../../yl-layouts/yl-backdrop-filter/types";
import { IYLBackgroundColorProps } from "../../yl-layouts/yl-background-color/types";

export default function YLBackgroundContainer({
  children,
  blockSize = "600px",
  imgUrl,
  className,

  flexContainerStyle,
  backgroundImageStyle,
  backgroundColorStyle,
  backgroundFilterStyle,
}: IYLBackgroundContainerProps) {
  return (
    <YLFlexContainer
      className={className || ""}
      {...{ blockSize }}
      {...flexContainerStyle}
      tag={flexContainerStyle?.tag || ETag.div}
    >
      <YLBackgroundImage
        {...backgroundImageStyle}
        backgroundImage={imgUrl && `url("${imgUrl}")`}
        backgroundSize={
          imgUrl && (backgroundImageStyle?.backgroundSize || "cover")
        }
      />
      <YLBackdropFilter
        {...backgroundFilterStyle}
        backdropFilter={backgroundFilterStyle?.backdropFilter || "blur(1px)"}
      />
      <YLBackgroundColor
        {...backgroundColorStyle}
        opacity={backgroundColorStyle?.opacity || "0.3"}
        backgroundColor={backgroundColorStyle?.backgroundColor || "#000"}
      />
      {children}
    </YLFlexContainer>
  );
}
/************************Types*********************/
export interface IYLBackgroundContainerProps
  extends Partial<IChildren>,
    IClassName {
  imgUrl?: string;
  blockSize?: string;
  flexContainerStyle?: IYLFlexContainerProps;
  backgroundImageStyle?: IYLBackgroundImageProps;
  backgroundFilterStyle?: IYLBackdropFilterProps;
  backgroundColorStyle?: IYLBackgroundColorProps;
}
