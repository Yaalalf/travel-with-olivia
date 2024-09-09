import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import "./index.css";
import {
  IYLDecoratorImageProps,
  IYLDecoratorImageStyleProps,
  YLDecoratorImageStyle,
} from "./types";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import { initBackgroundPositionValues } from "@/components/yl-utils/yl-utils";
export function YLDecoratorImage({
  className,

  blockSize,
  inlineSize,
  backgroundImage,

  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundRepeat,
  backgroundSize,

  filter,

  position,
  bottom,
  left,
  right,
  top,

  transform,
  zIndex,

  mediaQuery = {},
}: IYLDecoratorImageProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLDecoratorImageStyle,
    IYLDecoratorImageStyleProps
  >({
    name: EYLComponentsNames.YL_DECORATOR_IMAGE,
    props: {
      inlineSize,
      blockSize,
      backgroundPosition,
      backgroundPositionX,
      backgroundPositionY,
      backgroundRepeat,
      backgroundSize,
      bottom,
      left,
      position,
      right,
      top,
      backgroundImage,
      transform,
      zIndex,
      filter,
    },
    mediaQuery: mediaQuery,
    initProps: (props) => {
      initBackgroundPositionValues(props);
    },
  });

  return (
    <div
      className={`yl-decorator-image ${className || ""}`}
      style={
        {
          ...styles,
        } as React.CSSProperties
      }
    ></div>
  );
}
