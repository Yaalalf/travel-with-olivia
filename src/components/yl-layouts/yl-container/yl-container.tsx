import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  LegacyRef,
  ReactNode,
} from "react";
import "./index.css";

import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import {
  IYLContainerProps,
  IYLContainerStyleProps,
  YLContainerStyle,
} from "./types";
import {
  initBorderRadiusValues,
  initBorderValues,
  initMarginValues,
  initPaddingValues,
  initTransitionValues,
} from "@/components/yl-utils/yl-utils";
import {
  ETag,
  YLComponentMediaQueryStyle,
} from "@/components/yl-utils/yl-global-interfaces";
import { useYLComponentStateStylesVars } from "@/components/yl-hooks/use-style-state-vars";
export default forwardRef(function YLContainer<
  T extends HTMLElement,
  State extends string
>(
  {
    children,
    className,
    tag = ETag.div,

    dataParentHover = false,
    dataParentActive = false,
    dataChildActive = false,
    dataChildHover = false,

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

    color,
    fontFamily,
    fontSize,
    fontWeight,

    rotate,
    scale,
    transform,
    translate,

    transformStyle,
    transformOrigin,

    transition,
    transitionProperty,

    opacity,

    filter,
    overflow,
    userSelect,
    cursor,
    zIndex,
    boxSizing,

    mediaQuery = {},

    hoverStyle = {},
    parentHoverStyle = {},
    childHoverStyle = {},

    activeStyle = {},
    parentActiveStyle = {},
    childActiveStyle = {},

    extendedStyles = {},
  }: IYLContainerProps,
  ref: ForwardedRef<T>
) {
  const initProps = (props: IYLContainerStyleProps) => {
    initPaddingValues(props);
    initMarginValues(props);
    initBorderRadiusValues(props);
    initBorderValues(props);
    initTransitionValues(props);
  };
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLContainerStyle,
    IYLContainerStyleProps
  >({
    name: EYLComponentsNames.YL_CONTAINER,
    props: {
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

      color,
      fontFamily,
      fontSize,
      fontWeight,

      rotate,
      scale,
      transform,
      translate,
      transformOrigin,

      transformStyle,

      transition,
      transitionProperty,
      filter,
      opacity,
      overflow,
      cursor,
      zIndex,
      userSelect,
      boxSizing,
    },
    mediaQuery,
    initProps,
  });

  const {
    activeStyles,
    hoverStyles,
    parentActiveStyles,
    parentHoverStyles,
    childActiveStyles,
    childHoverStyles,
  } = useYLComponentStateStylesVars<YLContainerStyle, IYLContainerStyleProps>({
    name: EYLComponentsNames.YL_CONTAINER,
    hoverStyle,
    parentHoverStyle,
    childHoverStyle,
    activeStyle,
    parentActiveStyle,
    childActiveStyle,
    initProps,
  });
  return ContainerFactory(
    {
      children,
      className,
      tag,
      dataParentHover,
      dataParentActive,
      dataChildActive,
      dataChildHover,
      onClick,
      onTransitionEnd,
    },
    {
      ...styles,
      ...activeStyles,
      ...hoverStyles,
      ...parentActiveStyles,
      ...parentHoverStyles,
      ...childActiveStyles,
      ...childHoverStyles,
      ...extendedStyles,
    },
    ref
  );
});
function ContainerFactory<T>(
  props: Pick<
    IYLContainerProps,
    | "children"
    | "className"
    | "tag"
    | "onClick"
    | "onTransitionEnd"
    | "dataParentHover"
    | "dataParentActive"
    | "dataChildActive"
    | "dataChildHover"
  >,
  styles: YLComponentMediaQueryStyle<YLContainerStyle>,
  ref: ForwardedRef<T>
): ReactNode {
  let dataListObj: any = {};

  props.dataParentHover && (dataListObj["data-parent-hover"] = true);
  props.dataParentActive && (dataListObj["data-parent-active"] = true);
  props.dataChildHover && (dataListObj["data-child-hover"] = true);
  props.dataChildActive && (dataListObj["data-child-active"] = true);

  const propsObject = {
    className: `yl-container ${props.className || ""}`,
    style: styles as CSSProperties,
    onClick: props.onClick,
    onTransitionEnd: props.onTransitionEnd,
    ...dataListObj,
  };

  switch (props.tag) {
    case ETag.div:
      return (
        <div ref={ref as LegacyRef<HTMLDivElement>} {...propsObject}>
          {props.children}
        </div>
      );
    case ETag.section:
      return (
        <section ref={ref as LegacyRef<HTMLDivElement>} {...propsObject}>
          {props.children}
        </section>
      );
    case ETag.article:
      return (
        <article ref={ref as LegacyRef<HTMLDivElement>} {...propsObject}>
          {props.children}
        </article>
      );
    case ETag.ul:
      return (
        <ul ref={ref as LegacyRef<HTMLUListElement>} {...propsObject}>
          {props.children}
        </ul>
      );
    case ETag.button:
      return (
        <button ref={ref as LegacyRef<HTMLButtonElement>} {...propsObject}>
          {props.children}
        </button>
      );

    case ETag.span:
      return (
        <span ref={ref as LegacyRef<HTMLSpanElement>} {...propsObject}>
          {props.children}
        </span>
      );
  }
}
