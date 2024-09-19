import { IYLFlexContainerProps } from "../../yl-flex-container/types";
import { EYLButtonSize } from "@/components/yl-library/yl-button/types";
import { IYLIconProps } from "../../yl-icon/yl-icon";
import { IYLTextStyleProps } from "../../yl-text/types";
import { IYLBaseButtonProps } from "./yl-base-button";

export default function useYLBaseButtonStyle({
  collapsed,

  loading,
  rounded,
  size,
}: Pick<IYLBaseButtonProps, "size" | "collapsed" | "rounded" | "loading">) {
  /************************DefaultValues*********************/

  let constructedContainerStyle: IYLFlexContainerProps = {
    blockSize: "56px",

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    borderRadius: "8px",
    border: "none",
    backgroundColor: "white",

    overflow: "hidden",
    cursor: "pointer",
  };
  let constructedButtonStyle: IYLFlexContainerProps = {
    inlineSize: "100%",
    blockSize: "100%",
    paddingInline: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    userSelect: "none",
    cursor: "pointer",
  };
  let constructedDisabledForegroundStyle: IYLFlexContainerProps = {
    position: "absolute",
    inlineSize: "100%",
    blockSize: "100%",
    top: "0px",
    left: "0px",

    cursor: "not-allowed",
  };
  let constructedLoadingStyle: IYLFlexContainerProps = {
    position: "absolute",
    inlineSize: "100%",
    blockSize: "100%",
    cursor: "default",
  };

  let constructedIconStyle: Partial<IYLIconProps> = {
    size: "24px",
    color: "auto",
  };
  let constructedButtonTextStyle: IYLTextStyleProps = {
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "uppercase",
  };

  rounded && (constructedContainerStyle.borderRadius = "100%");
  if (collapsed) {
    constructedContainerStyle = {
      ...constructedContainerStyle,
      blockSize: "min-content",
    };

    constructedButtonStyle = {
      ...constructedButtonStyle,
      paddingInline: "8px",
      paddingBlock: "8px",
    };

    switch (size) {
      case EYLButtonSize.Small:
        constructedButtonStyle = {
          ...constructedButtonStyle,
          paddingInline: "12px",
        };
        break;
      case EYLButtonSize.Medium:
        constructedButtonStyle = {
          ...constructedButtonStyle,
          paddingInline: "16px",
        };
        break;
      case EYLButtonSize.Large:
        constructedButtonStyle = {
          ...constructedButtonStyle,
          paddingInline: "20px",
        };
        break;
    }

    constructedIconStyle = { ...constructedIconStyle, size: "18px" };
  } else {
    switch (size) {
      case EYLButtonSize.Small:
        constructedButtonStyle = {
          ...constructedButtonStyle,
          paddingInline: "20px",
        };
        break;
      case EYLButtonSize.Medium:
        constructedButtonStyle = {
          ...constructedButtonStyle,
          paddingInline: "32px",
        };
        break;
      case EYLButtonSize.Large:
        constructedButtonStyle = {
          ...constructedButtonStyle,
          paddingInline: "48px",
        };
        break;
    }
  }

  if (loading) {
    constructedButtonStyle = { ...constructedButtonStyle, opacity: "0" };
  }

  return {
    constructedContainerStyle,
    constructedButtonStyle,
    constructedIconStyle,
    constructedButtonTextStyle,
    constructedDisabledForegroundStyle,
    constructedLoadingStyle,
  };
}
