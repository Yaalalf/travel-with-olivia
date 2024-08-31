import { CSSProperties } from "react";
import "./index.css";
import {
  IYLFlexContainerProps,
  IYLFlexContainerStyleProps,
  YLFlexContainerStyle,
} from "./types";

import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import {
  initMarginValues,
  initPaddingValues,
} from "@/components/yl-utils/yl-utils";
export default function YLFlexContainer({
  children,
  className,

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

  alignItems,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,

  zIndex,

  mediaQuery = {},
}: IYLFlexContainerProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLFlexContainerStyle,
    IYLFlexContainerStyleProps
  >({
    name: EYLComponentsNames.YL_FLEX_CONTAINER,
    props: {
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

      alignItems,
      flexDirection,
      flexWrap,
      gap,
      justifyContent,

      zIndex,
    },
    mediaQuery: mediaQuery,
    initProps: (props) => {
      initPaddingValues(props);
      initMarginValues(props);
    },
  });
  return (
    <div
      className={`yl-flex-container ${className || ""}`}
      style={styles as CSSProperties}
    >
      {children}
    </div>
  );
}
