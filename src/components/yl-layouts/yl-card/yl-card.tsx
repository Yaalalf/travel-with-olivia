import { CSSProperties } from "react";
import "./index.css";

import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import { IYLCardProps, IYLCardStyleProps, YLCardStyle } from "./types";
import {
  initBorderRadiusValues,
  initMarginValues,
  initPaddingValues,
} from "@/components/yl-utils/yl-utils";

export default function YLCard({
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

  backgroundColor,

  border,
  borderBlock,
  borderBlockEnd,
  borderBlockStart,
  borderInline,
  borderInlineEnd,
  borderInlineStart,

  borderEndEndRadius,
  borderEndStartRadius,
  borderRadius,
  borderStartEndRadius,
  borderStartStartRadius,

  zIndex,

  mediaQuery = {},
}: IYLCardProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLCardStyle,
    IYLCardStyleProps
  >({
    name: EYLComponentsNames.YL_CARD,
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

      backgroundColor,

      border,
      borderBlock,
      borderBlockEnd,
      borderBlockStart,
      borderInline,
      borderInlineEnd,
      borderInlineStart,

      borderEndEndRadius,
      borderEndStartRadius,
      borderRadius,
      borderStartEndRadius,
      borderStartStartRadius,

      zIndex,
    },
    mediaQuery: mediaQuery,
    initProps: (props) => {
      initPaddingValues(props);
      initMarginValues(props);
      initBorderRadiusValues(props);
    },
  });
  return (
    <div
      className={`yl-card ${className || ""}`}
      style={styles as CSSProperties}
    >
      {children}
    </div>
  );
}
