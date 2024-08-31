import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import "./index.css";
import {
  IYLBackdropFilterProps,
  IYLBackdropFilterStyleProps,
  YLBackdropFilterStyle,
} from "./types";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
export function YLBackdropFilter({
  className,

  blockSize,
  inlineSize,

  backdropFilter,

  bottom,
  left,
  position,
  right,
  top,

  opacity,
  zIndex,

  mediaQuery = {},
}: IYLBackdropFilterProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLBackdropFilterStyle,
    IYLBackdropFilterStyleProps
  >({
    name: EYLComponentsNames.YL_BACKDROP_FILTER,
    props: {
      inlineSize,
      blockSize,
      backdropFilter,
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
      className={`yl-backdrop-filter ${className || ""}`}
      style={styles as React.CSSProperties}
    ></div>
  );
}
