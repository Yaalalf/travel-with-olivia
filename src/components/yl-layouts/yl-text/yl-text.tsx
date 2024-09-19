import { CSSProperties, ReactNode } from "react";
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
import { useYLComponentStateStylesVars } from "@/components/yl-hooks/use-style-state-vars";
export default function YLText({
  children,
  className,
  tag = ETag.p,

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
}: IYLTextProps) {
  const initProps = (props: IYLTextProps) => {
    initPaddingValues(props);
    initMarginValues(props);
  };

  const { styles } = useYLComponentStyleMediaQueryVars<
    YLTextStyle,
    IYLTextStyleProps
  >({
    name: EYLComponentsNames.YL_TEXT,
    props: {
      blockSize,
      inlineSize,
      maxBlockSize,
      maxInlineSize,
      minBlockSize,
      minInlineSize,

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
      color,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
      textDecoration,
    },
    mediaQuery: mediaQuery,
    initProps,
  });

  const { hoverStyles, parentHoverStyles, activeStyles, parentActiveStyles } =
    useYLComponentStateStylesVars<YLTextStyle, IYLTextStyleProps>({
      name: EYLComponentsNames.YL_TEXT,
      hoverStyle,
      parentHoverStyle,
      childHoverStyle,
      activeStyle,
      parentActiveStyle,
      childActiveStyle,
      initProps,
    });

  return TextFactory(
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

function TextFactory(
  props: Pick<IYLTextProps, "children" | "className" | "tag">,
  styles: IYLTextStyle
): ReactNode {
  const propsObject = {
    className: `yl-text ${props.className || ""}`,
    style: styles as CSSProperties,
  };

  switch (props.tag) {
    case ETag.p:
      return (
        <p {...propsObject}>
          {props.children ? props.children : ETextPlaceholder.LONG}
        </p>
      );
    case ETag.span:
      return (
        <span {...propsObject}>
          {props.children ? props.children : ETextPlaceholder.SMALL}
        </span>
      );
  }
}
