import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import "./index.css";
import {
  IYLBackgroundImageProps,
  IYLBackgroundImageStyleProps,
  YLBackgroundImageStyle,
} from "./types";
import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import { initBackgroundPositionValues } from "@/components/yl-utils/yl-utils";
export function YLBackgroundImage({
  className,

  blockSize,
  inlineSize,
  backgroundImage,

  backgroundPosition,
  backgroundPositionX,
  backgroundPositionY,
  backgroundRepeat,
  backgroundSize,

  position,
  bottom,
  left,
  right,
  top,

  zIndex,

  mediaQuery = {},
}: IYLBackgroundImageProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLBackgroundImageStyle,
    IYLBackgroundImageStyleProps
  >({
    name: EYLComponentsNames.YL_BACKGROUND_IMAGE,
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
      zIndex,
    },
    mediaQuery: mediaQuery,
    initProps: (props) => {
      initBackgroundPositionValues(props);
    },
  });

  return (
    <div
      className={`yl-background-image ${className || ""}`}
      style={
        {
          ...styles,
        } as React.CSSProperties
      }
    ></div>
  );
}
