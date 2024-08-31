import { ReactNode } from "react";
import "./index.css";
import {
  IYLTextProps,
  IYLTextStyle,
  IYLTextStyleProps,
  YLTextStyle,
} from "./types";

import {
  ETextPlaceholder,
  EYLComponentsNames,
} from "@/components/yl-utils/yl-global-enums";
import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import {
  initMarginValues,
  initPaddingValues,
} from "@/components/yl-utils/yl-utils";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";
export default function YLText({
  children,
  className,
  tag = ETag.p,

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

  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  textTransform,
  textShadow,
  textAlign,

  mediaQuery = {},
}: IYLTextProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLTextStyle,
    IYLTextStyleProps
  >({
    name: EYLComponentsNames.YL_TEXT,
    props: {
      blockSize,
      color,
      fontFamily,
      fontSize,
      fontWeight,
      inlineSize,
      lineHeight,
      margin,
      marginBlock,
      marginBlockEnd,
      marginBlockStart,
      marginInline,
      marginInlineEnd,
      marginInlineStart,
      padding,
      paddingBlock,
      paddingBlockEnd,
      paddingBlockStart,
      paddingInline,
      paddingInlineEnd,
      paddingInlineStart,
      textAlign,
      textShadow,
      textTransform,
    },
    mediaQuery: mediaQuery,
    initProps: (props) => {
      initPaddingValues(props);
      initMarginValues(props);
    },
  });

  return TextFactory(
    {
      children,
      className,
      tag,
    },
    styles
  );
}

function TextFactory(
  props: Pick<IYLTextProps, "children" | "className" | "tag">,
  style: IYLTextStyle
): ReactNode {
  switch (props.tag) {
    case ETag.p:
      return (
        <p
          className={`yl-text ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.LONG}
        </p>
      );
    case ETag.span:
      return (
        <span
          className={`yl-text ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.SMALL}
        </span>
      );
  }
}
