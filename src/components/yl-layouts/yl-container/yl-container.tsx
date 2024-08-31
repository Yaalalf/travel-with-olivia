import { CSSProperties, ReactNode } from "react";
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
  initMarginValues,
  initPaddingValues,
} from "@/components/yl-utils/yl-utils";
import {
  ETag,
  YLComponentMediaQueryStyle,
} from "@/components/yl-utils/yl-global-interfaces";
export default function YLContainer({
  children,
  className,
  tag = ETag.div,

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

  backgroundColor,

  boxShadow,
  overflow,
  zIndex,

  mediaQuery = {},
  extendedStyles = {},
}: IYLContainerProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLContainerStyle,
    IYLContainerStyleProps
  >({
    name: EYLComponentsNames.YL_CONTAINER,
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

      backgroundColor,
      boxShadow,

      overflow,
      zIndex,
    },
    mediaQuery: mediaQuery,
    initProps: (props) => {
      initPaddingValues(props);
      initMarginValues(props);
      initBorderRadiusValues(props);
    },
  });
  return ContainerFactory(
    {
      children,
      className,
      tag,
    },
    { ...styles, ...extendedStyles }
  );
}
function ContainerFactory(
  props: Pick<IYLContainerProps, "children" | "className" | "tag">,
  styles: YLComponentMediaQueryStyle<YLContainerStyle>
): ReactNode {
  switch (props.tag) {
    case ETag.div:
      return (
        <div
          className={`yl-container ${props.className || ""}`}
          style={styles as CSSProperties}
        >
          {props.children}
        </div>
      );
    case ETag.section:
      return (
        <section
          className={`yl-container ${props.className || ""}`}
          style={styles as CSSProperties}
        >
          {props.children}
        </section>
      );
    case ETag.article:
      return (
        <article
          className={`yl-container ${props.className || ""}`}
          style={styles as CSSProperties}
        >
          {props.children}
        </article>
      );
  }
}
