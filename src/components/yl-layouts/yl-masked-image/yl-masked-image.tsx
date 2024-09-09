import { useYLComponentStyleMediaQueryVars } from "@/components/yl-hooks/use-style-media-query-vars";
import "./index.css";

import { EYLComponentsNames } from "@/components/yl-utils/yl-global-enums";
import {
  IYLMaskedImageProps,
  IYLMaskedImageStyleProps,
  YLMaskedImageStyle,
} from "./types";
export function YLMaskedImage({
  className,

  blockSize,
  inlineSize,
  backgroundColor,

  maskImage,
  maskPosition,
  maskRepeat,
  maskSize,

  position,
  bottom,
  left,
  right,
  top,

  zIndex,

  mediaQuery = {},
}: IYLMaskedImageProps) {
  const { styles } = useYLComponentStyleMediaQueryVars<
    YLMaskedImageStyle,
    IYLMaskedImageStyleProps
  >({
    name: EYLComponentsNames.YL_MASKED_IMAGE,
    props: {
      inlineSize,
      blockSize,
      backgroundColor,

      maskImage,
      maskPosition,
      maskRepeat,
      maskSize,
      bottom,
      left,
      position,
      right,
      top,

      zIndex,
    },
    mediaQuery: mediaQuery,
  });

  return (
    <div
      className={`yl-masked-image ${className || ""}`}
      style={
        {
          ...styles,
        } as React.CSSProperties
      }
    ></div>
  );
}
