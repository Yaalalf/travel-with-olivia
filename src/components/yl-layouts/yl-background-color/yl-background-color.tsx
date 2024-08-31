import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import "./index.css";
import {
  IYLBackgroundColorProps,
  IYLBackgroundColorStyleProps,
  YLBackgroundColorStyle,
} from "./types";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
export function YLBackgroundColor({
  className,

  blockSize,
  inlineSize,

  backgroundColor,

  bottom,
  left,
  position,
  right,
  top,

  opacity,
  zIndex,

  mediaQuery = {},
}: IYLBackgroundColorProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLBackgroundColorStyle,
    IYLBackgroundColorStyleProps
  >({
    name: EYLComponentsNames.YL_BACKGROUND_COLOR,
    props: {
      inlineSize,
      blockSize,
      backgroundColor,
      bottom,
      left,
      opacity,
      position,
      right,
      top,
      zIndex,
    },
    mediaQuery: mediaQuery,
  });

  return (
    <div
      className={`yl-background-color ${className || ""}`}
      style={styles as React.CSSProperties}
    ></div>
  );
}
