import { ETag } from "../../yl-utils/yl-global-interfaces";
import "./index.css";
import { IYLListProps, IYLListStyleProps, YLListStyle } from "./types";
import { splitMediaQueryObject } from "@/components/yl-utils/yl-utils";
import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import YlFlexContainer from "../yl-flex-container/yl-flex-container";
export default function YLList<T>({
  data,
  className,
  children,
  itemClassName,
  listKey,
  builder,

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

  transition,
  transitionProperty,
  listStyle,
  overflow,
  cursor,
  zIndex,

  mediaQuery = {},
}: IYLListProps<T>) {
  const [stylesMediaQuery, stylesExtendedMediaQuery] = splitMediaQueryObject(
    mediaQuery,
    ["listStyle"]
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

    alignItems,
    flexDirection,
    flexWrap,
    gap,
    justifyContent,

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

    transition,
    transitionProperty,

    overflow,
    cursor,
    zIndex,
  };

  const domProps = {
    onClick,
    onTransitionEnd,
  };
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLListStyle,
    IYLListStyleProps
  >({
    name: EYLComponentsNames.YL_LIST,
    props: {
      listStyle,
    },
    mediaQuery: stylesMediaQuery,
  });
  return (
    <YlFlexContainer
      tag={ETag.ul}
      className={`yl-list ${className || ""}`}
      {...stylesExtendedProps}
      mediaQuery={stylesExtendedMediaQuery}
      {...domProps}
      extendedStyles={{ ...styles }}
    >
      {children ||
        (data &&
          data.map((item: T, index: number) => (
            <li
              key={listKey ? (item[listKey] as string) : index}
              className={`yl-list-item ${itemClassName || ""}`}
            >
              {builder && builder(item, index)}
            </li>
          )))}
    </YlFlexContainer>
  );
}
