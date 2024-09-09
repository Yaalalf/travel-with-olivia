import "./index.css";
import {
  IYLFlexContainerProps,
  IYLFlexContainerStyleProps,
  YLFlexContainerStyle,
} from "./types";

import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";

import YLContainer from "../yl-container/yl-container";
import { splitMediaQueryObject } from "@/components/yl-utils/yl-utils";
import { ForwardedRef, forwardRef } from "react";
export default forwardRef(function YLFlexContainer(
  {
    children,
    className,
    tag,
    dataParentHover,
    onClick,
    onTransitionEnd,

    inlineSize,
    minInlineSize,
    maxInlineSize,
    blockSize,
    minBlockSize,
    maxBlockSize,

    padding,
    paddingBlock,
    paddingBlockEnd,
    paddingBlockStart,
    paddingInline,
    paddingInlineEnd,
    paddingInlineStart,

    margin,
    marginBlock,
    marginBlockEnd,
    marginBlockStart,
    marginInline,
    marginInlineEnd,
    marginInlineStart,

    display = "flex",

    border,
    borderBlock,
    borderBlockEnd,
    borderBlockStart,
    borderInline,
    borderInlineEnd,
    borderInlineStart,

    borderRadius,
    borderEndEndRadius,
    borderEndStartRadius,
    borderStartEndRadius,
    borderStartStartRadius,

    bottom,
    left,
    position,
    right,
    top,

    backgroundColor,
    boxShadow,

    alignItems,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,

    rotate,
    scale,
    transform,
    translate,
    filter,
    transformStyle,
    transition,
    transitionProperty,
    transformOrigin,

    opacity,
    overflow,
    cursor,
    zIndex,
    userSelect,
    mediaQuery = {},
    extendedStyles = {},
  }: IYLFlexContainerProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [stylesMediaQuery, stylesExtendedMediaQuery] = splitMediaQueryObject(
    mediaQuery,
    ["flexDirection", "flexWrap", "alignItems", "gap", "justifyContent"]
  );

  const stylesExtendedProps = {
    inlineSize,
    minInlineSize,
    maxInlineSize,
    blockSize,
    minBlockSize,
    maxBlockSize,

    padding,
    paddingBlock,
    paddingBlockEnd,
    paddingBlockStart,
    paddingInline,
    paddingInlineEnd,
    paddingInlineStart,

    margin,
    marginBlock,
    marginBlockEnd,
    marginBlockStart,
    marginInline,
    marginInlineEnd,
    marginInlineStart,

    display,

    border,
    borderBlock,
    borderBlockEnd,
    borderBlockStart,
    borderInline,
    borderInlineEnd,
    borderInlineStart,

    borderRadius,
    borderEndEndRadius,
    borderEndStartRadius,
    borderStartEndRadius,
    borderStartStartRadius,

    bottom,
    left,
    position,
    right,
    top,

    backgroundColor,
    boxShadow,

    rotate,
    scale,
    transform,
    translate,

    filter,
    transformStyle,

    transition,
    transitionProperty,
    transformOrigin,

    opacity,
    overflow,
    cursor,
    zIndex,
    userSelect,
  };
  const domProps = {
    onClick,
    onTransitionEnd,
    tag,
    dataParentHover,
  };

  const { styles } = useYLComponentStyleMediaQueryVars<
    YLFlexContainerStyle,
    IYLFlexContainerStyleProps
  >({
    name: EYLComponentsNames.YL_FLEX_CONTAINER,
    props: {
      alignItems,
      flexDirection,
      flexWrap,
      gap,
      justifyContent,
    },
    mediaQuery: stylesMediaQuery,
  });

  return (
    <YLContainer
      ref={ref}
      className={`yl-flex-container ${className || ""}`}
      {...stylesExtendedProps}
      mediaQuery={stylesExtendedMediaQuery}
      {...domProps}
      extendedStyles={{ ...styles, ...extendedStyles }}
    >
      {children}
    </YLContainer>
  );
});
