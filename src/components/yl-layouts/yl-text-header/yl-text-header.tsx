import { ReactNode } from "react";
import "./index.css";
import {
  IYLTextHeaderProps,
  IYLTextHeaderStyle,
  IYLTextHeaderStyleProps,
  YLTextHeaderStyle,
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
import { useYLComponentStateStylesVars } from "@/components/yl-hooks/use-style-state-vars";
export default function YLTextHeader({
  children,
  className,
  tag = "h1",

  inlineSize,
  blockSize,
  maxBlockSize,
  maxInlineSize,
  minBlockSize,
  minInlineSize,

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
  textDecoration,

  mediaQuery = {},
  hoverStyle = {},
  parentHoverStyle = {},
  childHoverStyle = {},
  activeStyle = {},
  parentActiveStyle = {},
  childActiveStyle = {},
}: IYLTextHeaderProps) {
  const initProps = (props: IYLTextHeaderProps) => {
    initPaddingValues(props);
    initMarginValues(props);
  };

  const { styles } = useYLComponentStyleMediaQueryVars<
    YLTextHeaderStyle,
    IYLTextHeaderStyleProps
  >({
    name: EYLComponentsNames.YL_TEXT_HEADER,
    props: {
      blockSize,
      maxBlockSize,
      maxInlineSize,
      minBlockSize,
      minInlineSize,
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
      textDecoration,
    },
    mediaQuery: mediaQuery,
    initProps,
  });

  const { hoverStyles, parentHoverStyles, activeStyles, parentActiveStyles } =
    useYLComponentStateStylesVars<YLTextHeaderStyle, IYLTextHeaderStyleProps>({
      name: EYLComponentsNames.YL_TEXT,
      hoverStyle,
      parentHoverStyle,
      childHoverStyle,
      activeStyle,
      parentActiveStyle,
      childActiveStyle,
      initProps,
    });

  return HFactory(
    {
      children,
      className,
      tag,
    },
    {
      ...styles,
      ...hoverStyles,
      ...parentHoverStyles,
      ...activeStyles,
      ...parentActiveStyles,
    }
  );
}

function HFactory(
  props: Pick<IYLTextHeaderProps, "children" | "className" | "tag">,
  style: IYLTextHeaderStyle
): ReactNode {
  switch (props.tag) {
    case ETag.h1:
      return (
        <h1
          className={`yl-text-header ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.MEDIUM}
        </h1>
      );
    case ETag.h2:
      return (
        <h2
          className={`yl-text-header ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.MEDIUM}
        </h2>
      );
    case ETag.h3:
      return (
        <h3
          className={`yl-text-header ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.MEDIUM}
        </h3>
      );
    case ETag.h4:
      return (
        <h4
          className={`yl-text-header ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.MEDIUM}
        </h4>
      );
    case ETag.h5:
      return (
        <h5
          className={`yl-text-header ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.MEDIUM}
        </h5>
      );
    case ETag.h6:
      return (
        <h6
          className={`yl-text-header ${props.className || ""}`}
          style={style as React.CSSProperties}
        >
          {props.children ? props.children : ETextPlaceholder.MEDIUM}
        </h6>
      );
  }
}
