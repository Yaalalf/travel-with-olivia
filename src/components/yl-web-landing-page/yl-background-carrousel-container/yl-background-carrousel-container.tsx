import {
  ETag,
  IChildren,
  IClassName,
} from "@/components/yl-utils/yl-global-interfaces";
import { YLBackdropFilter } from "../../yl-layouts/yl-backdrop-filter/yl-backdrop-filter";
import { YLBackgroundColor } from "../../yl-layouts/yl-background-color/yl-background-color";
import YLFlexContainer from "../../yl-layouts/yl-flex-container/yl-flex-container";
import { IYLFlexContainerProps } from "../../yl-layouts/yl-flex-container/types";
import {
  IYLBackdropFilterProps,
  IYLBackdropFilterStyleProps,
} from "../../yl-layouts/yl-backdrop-filter/types";
import {
  IYLBackgroundColorProps,
  IYLBackgroundColorStyleProps,
} from "../../yl-layouts/yl-background-color/types";
import YLBackgroundCarrousel, {
  IYLBackgroundCarrouselProps,
} from "../../yl-layouts/yl-background-carrousel/yl-background-carrousel";

export default function YLBackgroundCarrouselContainer({
  children,
  blockSize = "600px",
  imgUrls,
  className,

  containerStyle,
  backgroundColorStyle,
  backgroundFilterStyle,
}: IYLBackgroundCarrouselContainerProps) {
  return (
    <YLFlexContainer
      className={`yl-background-carrousel-container ${className || ""}`}
      {...defaultContainerValues}
      {...{ blockSize }}
      {...containerStyle}
    >
      <YLBackgroundCarrousel {...defaultCarrouselValues} imgUrls={imgUrls}>
        <YLBackdropFilter
          className="yl-background-carrousel-backdrop-filter"
          {...defaultBackdropFilterValues}
          {...backgroundFilterStyle}
        />
        <YLBackgroundColor
          className="yl-background-carrousel-background-color"
          {...defaultBackgroundColorValues}
          {...backgroundColorStyle}
        />
        {children}
      </YLBackgroundCarrousel>
    </YLFlexContainer>
  );
}

/************************DefaultValues*********************/
const defaultContainerValues: IYLFlexContainerProps = { tag: ETag.div };

const defaultCarrouselValues: Partial<IYLBackgroundCarrouselProps> = {
  inlineSize: "100%",
  blockSize: "100%",
};

const defaultBackgroundColorValues: IYLBackgroundColorStyleProps = {
  opacity: "0.3",
  backgroundColor: "#000",
};
const defaultBackdropFilterValues: IYLBackdropFilterStyleProps = {
  backdropFilter: "blur(1px)",
};
/************************Types*********************/
export interface IYLBackgroundCarrouselContainerProps
  extends Partial<IChildren>,
    IClassName {
  imgUrls: string[];
  blockSize?: string;
  containerStyle?: IYLFlexContainerProps;
  backgroundFilterStyle?: IYLBackdropFilterProps;
  backgroundColorStyle?: IYLBackgroundColorProps;
}
