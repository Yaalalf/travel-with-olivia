import { IYLFlexContainerProps } from "../../yl-flex-container/types";
import { IYLIconProps } from "../../yl-icon/yl-icon";
import { IYLTextStyleProps } from "../../yl-text/types";
import chroma from "chroma-js";
import { IButtonTheme } from "../yl-base-button/yl-base-button";

export default function useYLElevatedButtonStyle(theme: IButtonTheme) {
  let buttonContainer: IYLFlexContainerProps = {};
  let button: IYLFlexContainerProps = {};
  let disabledLayer: IYLFlexContainerProps = {};

  let icon: Partial<IYLIconProps> = {};
  let text: IYLTextStyleProps = {};

  buttonContainer = {
    ...buttonContainer,
    backgroundColor: chroma("#e9e9e9").hex(),
    boxShadow: `0px 3px 6px ${
      chroma(theme.defaultColor as string)
        .darken(5)
        .alpha(0.4)
        .hex() || "#0000004a"
    }`,
    color: chroma(theme.defaultColor as string).hex(),

    fontFamily: "Inter",
    fontSize: "12px",
    fontWeight: "600",

    childHoverStyle: {
      backgroundColor: chroma("#e9e9e9").brighten(0.1).hex(),
    },
    childActiveStyle: {
      backgroundColor: chroma("#e9e9e9").darken(0.1).hex(),
    },
  };

  text = {
    ...text,
    parentHoverStyle: {
      color: chroma(theme.defaultColor as string)
        .brighten(0.2)
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
            .brighten(0.2)
            .hex(),
        },
      },
    },
  };

  disabledLayer = {
    ...disabledLayer,
    backgroundColor: "#00000027",
  };

  return {
    buttonContainer,
    button,
    icon,
    text,
    disabledLayer,
  };
}
