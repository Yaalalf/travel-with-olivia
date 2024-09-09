"use client";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";

import ArrowBackIcon from "@/components/yl-icons/arrow_back_icon";
import ArrowForwardIcon from "@/components/yl-icons/arrow_forward_icon";
import {
  IChildren,
  IDimension,
} from "@/components/yl-utils/yl-global-interfaces";
import { IYLFlexContainerStyleProps } from "../yl-flex-container/types";
import useYLCarrousel from "./use-yl-carrousel";

export default function YLBackgroundCarrousel({
  imgUrls,
  children,
  autoplay = true,
  autoplayDelay = 5000,
  blockSize = "600px",
  inlineSize = "100%",
  maxBlockSize = "100%",
  maxInlineSize = "100%",
  minBlockSize = "0",
  minInlineSize = "0",

  containerStyle,
}: IYLBackgroundCarrouselProps) {
  const {
    elementRef,
    containerRef,
    slideWidth,
    selectedSlide,
    transitionProperty,
    data,
    onTransitionEnd,
    onPreviousSlide,
    onNextSlide,
  } = useYLCarrousel({
    imgUrls,
    inlineSize,
    autoplay,
    autoplayDelay,
  });

  return (
    <YLContainer
      className="yl-background-carrousel"
      ref={containerRef}
      {...{
        inlineSize,
        blockSize,
        maxBlockSize,
        maxInlineSize,
        minBlockSize,
        minInlineSize,
      }}
      {...containerStyle}
      overflow="hidden"
      onTransitionEnd={onTransitionEnd}
    >
      <YLFlexContainer
        className="yl-carrousel-background-button yl-button-previous"
        {...defaultButtonStyle}
        left="20px"
        top="calc(50% - 10px)"
        onClick={onPreviousSlide}
      >
        <ArrowBackIcon fill="white" size="100%"></ArrowBackIcon>
      </YLFlexContainer>
      <YLFlexContainer
        className="yl-carrousel-background-button yl-button-next"
        {...defaultButtonStyle}
        right="20px"
        top="calc(50% - 10px)"
        onClick={onNextSlide}
      >
        <ArrowForwardIcon fill="white" size="100%"></ArrowForwardIcon>
      </YLFlexContainer>
      <YLFlexContainer
        className="yl-carrousel-background-slides"
        ref={elementRef}
        {...defaultSlideStyle}
        inlineSize={`calc(${slideWidth} * ${data.length})`}
        translate={`calc(-${slideWidth} * ${selectedSlide})`}
        transition="all ease-in-out 1000ms"
        transitionProperty={transitionProperty}
      >
        {data.map((item, index) => (
          <YLContainer
            className="yl-carrousel-background-slide"
            key={item + "-" + index}
            inlineSize={slideWidth}
            blockSize="100%"
          >
            <YLBackgroundImage
              className="yl-background-slide"
              backgroundSize="cover"
              backgroundImage={`url("${item}")`}
            ></YLBackgroundImage>
          </YLContainer>
        ))}
      </YLFlexContainer>
      <YLFlexContainer
        className="yl-background-carrousel-children"
        {...defaultChildrenContainer}
      >
        {children}
      </YLFlexContainer>
    </YLContainer>
  );
}
/************************DefaultValues*********************/

const defaultChildrenContainer: IYLFlexContainerStyleProps = {
  inlineSize: "100%",
  blockSize: "100%",
  flexDirection: "column",
  gap: "40px",
};

const defaultSlideStyle: IYLFlexContainerStyleProps = {
  position: "absolute",
  top: "0px",
  left: "0px",
  blockSize: "100%",
  flexDirection: "row",
};

const defaultButtonStyle: IYLFlexContainerStyleProps = {
  inlineSize: "32px",
  blockSize: "32px",
  position: "absolute",
  zIndex: "20",
  cursor: "pointer",
};

/************************Types*********************/
export interface IYLBackgroundCarrouselProps
  extends Partial<IChildren>,
    Partial<IDimension> {
  imgUrls: string[];
  autoplay?: boolean;
  autoplayDelay?: number;

  containerStyle?: IYLFlexContainerStyleProps;
}
