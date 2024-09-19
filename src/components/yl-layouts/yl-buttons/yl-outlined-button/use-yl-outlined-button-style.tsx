import { IYLFlexContainerProps } from "../../yl-flex-container/types";
import { IYLIconProps } from "../../yl-icon/yl-icon";
import { IYLTextStyleProps } from "../../yl-text/types";
import chroma from "chroma-js";
import { IButtonTheme } from "../yl-base-button/yl-base-button";

export default function useYLOutlinedButtonStyle(theme: IButtonTheme) {
  let buttonContainer: IYLFlexContainerProps = {};
  let button: IYLFlexContainerProps = {};
  let disabledLayer: IYLFlexContainerProps = {};

  let icon: Partial<IYLIconProps> = {};
  let text: IYLTextStyleProps = {};

  buttonContainer = {
    ...buttonContainer,
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: "8px",

    color: chroma(theme.defaultColor as string).hex(),
    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: "600",
  };

  button = {
    ...button,
    borderRadius: "8px",
    border: `2px solid  ${chroma(theme.defaultColor as string).hex()}`,
    hoverStyle: {
      backgroundColor: chroma(theme.defaultColor as string)
        .brighten(0.5)
        .alpha(0.24)
        .hex(),
      border: `2px solid ${chroma(theme.defaultColor as string)
        .brighten(1)
        .hex()}`,
    },
    activeStyle: {
      backgroundColor: chroma(theme.defaultColor as string)
        .darken(0.5)
        .alpha(0.24)
        .hex(),
      border: `2px solid ${chroma(theme.defaultColor as string)
        .darken(0.5)
        .hex()} `,
    },
  };

  text = {
    ...text,
    parentHoverStyle: {
      color: chroma(theme.defaultColor as string)
        .brighten(1)
        .hex(),
    },
    parentActiveStyle: {
      color: chroma(theme.defaultColor as string)
        .darken(0.2)
        .hex(),
    },
  };

  icon = {
    ...icon,
    color: chroma(theme.defaultColor as string).hex(),
    theme: {
      maskedImageStyle: {
        parentHoverStyle: {
          backgroundColor: chroma(theme.defaultColor as string)
            .brighten(1)
            .hex(),
        },
        parentActiveStyle: {
          backgroundColor: chroma(theme.defaultColor as string)
            .darken(0.2)
            .hex(),
        },
      },
    },
  };

  disabledLayer = {
    ...disabledLayer,
    backgroundColor:
      chroma(theme.defaultColor as string)
        .darken(5)
        .alpha(0.18)
        .hex() || "#00000018",
  };

  return {
    buttonContainer,
    button,
    icon,
    text,
    disabledLayer,
  };
}
