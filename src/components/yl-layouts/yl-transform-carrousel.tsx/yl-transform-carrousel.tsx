"use client";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";

import ArrowBackIcon from "@/components/yl-icons/arrow_back_icon";
import ArrowForwardIcon from "@/components/yl-icons/arrow_forward_icon";
import { IDimension } from "@/components/yl-utils/yl-global-interfaces";
import { IYLFlexContainerStyleProps } from "../yl-flex-container/types";
import useYLCarrousel from "./use-yl-carrousel";
import { ReactNode } from "react";

export default function YLTransformCarrousel({
  items,
  autoplay = false,
  autoplayDelay = 2000,
  infinite = false,
  controls = false,

  blockSize = "600px",
  inlineSize = "100%",
  maxBlockSize = "100%",
  maxInlineSize = "100%",
  minBlockSize = "0",
  minInlineSize = "0",

  containerStyle,
  options,
}: IYLTransformCarrouselProps) {
  const defaultCarrouselOptions: Required<IYLTransformCarrouselOptions> = {
    distance: 200 * items.length,
    perspective: 900,
    rotationX: -20,
    rotationY: 20,
    visibleItems: items.length,
    ...options,
  };

  const {
    elementRef,
    containerRef,
    selectedSlide,
    transitionProperty,
    data,
    handleFilter,
    handleOpacity,
    onTransitionEnd,
    onPreviousSlide,
    onNextSlide,
  } = useYLCarrousel({
    items,
    inlineSize,
    autoplay,
    autoplayDelay,
    infinite,
    defaultCarrouselOptions,
  });

  return (
    <YLContainer
      className="yl-transform-carrousel"
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
      onTransitionEnd={onTransitionEnd}
    >
      {controls && (
        <YLFlexContainer
          className="yl-carrousel-transform-button yl-button-previous"
          {...defaultButtonStyle}
          left="20px"
          top="calc(50% - 10px)"
          onClick={onPreviousSlide}
          backgroundColor="black"
        >
          <ArrowBackIcon fill="white" size="100%"></ArrowBackIcon>
        </YLFlexContainer>
      )}
      {controls && (
        <YLFlexContainer
          className="yl-carrousel-transform-button yl-button-next"
          {...defaultButtonStyle}
          right="20px"
          top="calc(50% - 10px)"
          onClick={onNextSlide}
          backgroundColor="black"
        >
          <ArrowForwardIcon fill="white" size="100%"></ArrowForwardIcon>
        </YLFlexContainer>
      )}
      <YLFlexContainer
        className="yl-carrousel-transform-slides"
        ref={elementRef}
        {...defaultSlideStyle}
        inlineSize="100%"
        transformStyle="preserve-3d"
      >
        {data.map((item, index) => (
          <YLFlexContainer
            className="yl-carrousel-transform-slide"
            key={item + "-" + index}
            inlineSize="auto"
            blockSize="auto"
            transition="all ease-in-out 1000ms"
            transitionProperty={transitionProperty}
            position="absolute"
            opacity={handleOpacity(index)}
            filter={handleFilter(index)}
            transform={`perspective(${
              defaultCarrouselOptions.perspective
            }px) rotateX(${defaultCarrouselOptions.rotationX}deg) rotateY(${
              defaultCarrouselOptions.rotationY
            }deg) translateZ(calc(-${
              defaultCarrouselOptions.distance
            }px * ${index} - ${
              defaultCarrouselOptions.distance
            }px * ${-selectedSlide}))`}
            zIndex={`${data.length - index + selectedSlide}`}
          >
            {item}
          </YLFlexContainer>
        ))}
      </YLFlexContainer>
    </YLContainer>
  );
}

/************************DefaultValues*********************/

const defaultSlideStyle: IYLFlexContainerStyleProps = {
  inlineSize: "100%",
  blockSize: "100%",
};

const defaultButtonStyle: IYLFlexContainerStyleProps = {
  inlineSize: "32px",
  blockSize: "32px",
  position: "absolute",
  zIndex: "20",
  cursor: "pointer",
};

/************************Types*********************/
export interface IYLTransformCarrouselProps extends Partial<IDimension> {
  items: ReactNode[];
  autoplay?: boolean;
  autoplayDelay?: number;
  controls?: boolean;
  infinite?: boolean;

  containerStyle?: IYLFlexContainerStyleProps;
  options?: IYLTransformCarrouselOptions;
}

export interface IYLTransformCarrouselOptions {
  distance?: number;
  perspective?: number;
  rotationX?: number;
  rotationY?: number;
  visibleItems?: number;
}
