import "./index.css";
import {
  IYLFlexContainerProps,
  IYLFlexContainerStyleProps,
  YLFlexContainerStyle,
} from "./types";

import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";

import YLContainer from "../yl-container/yl-container";
export default function YLFlexContainer({
  children,
  className,

  onClick,

  inlineSize,
  blockSize,

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

  overflow,
  zIndex,

  mediaQuery = {},
}: IYLFlexContainerProps) {
  const stylesExtendedProps = {
    inlineSize,
    blockSize,

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

    overflow,
    zIndex,
  };
  const domProps = {
    onClick,
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
    mediaQuery: mediaQuery,
  });
  return (
    <YLContainer
      className={`yl-flex-container ${className || ""}`}
      {...stylesExtendedProps}
      {...domProps}
      extendedStyles={styles}
    >
      {children}
    </YLContainer>
  );
}
