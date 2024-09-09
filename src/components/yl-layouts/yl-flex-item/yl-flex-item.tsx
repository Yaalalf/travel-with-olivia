import "./index.css";
import {
  IYLFlexItemProps,
  IYLFlexItemStyleProps,
  YLFlexItemStyle,
} from "./types";

import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";

import YLContainer from "../yl-container/yl-container";
export default function YLFlexItem({
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

  order,

  overflow,
  zIndex,

  mediaQuery = {},
}: IYLFlexItemProps) {
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
    YLFlexItemStyle,
    IYLFlexItemStyleProps
  >({
    name: EYLComponentsNames.YL_FLEX_ITEM,
    props: {
      order,
    },
    mediaQuery: mediaQuery,
  });
  return (
    <YLContainer
      className={`yl-flex-item ${className || ""}`}
      {...stylesExtendedProps}
      {...domProps}
      extendedStyles={styles}
    >
      {children}
    </YLContainer>
  );
}
