import { IYLFlexContainerProps } from "../../yl-flex-container/types";
import { IYLIconProps } from "../../yl-icon/yl-icon";
import { IYLTextStyleProps } from "../../yl-text/types";
import chroma from "chroma-js";
import { IButtonTheme } from "../yl-base-button/yl-base-button";

export default function useYLFilledButtonStyle(theme: IButtonTheme) {
  let buttonContainer: IYLFlexContainerProps = {};
  let button: IYLFlexContainerProps = {};
  let disabledLayer: IYLFlexContainerProps = {};

  let icon: Partial<IYLIconProps> = {};
  let text: IYLTextStyleProps = {};

  buttonContainer = {
    ...buttonContainer,
    backgroundColor: chroma(theme.defaultColor as string).hex(),
    boxShadow: `0px 3px 6px ${chroma(theme.defaultColor as string)
      .darken(5)
      .alpha(0.1)
      .hex()}`,
    color: chroma(theme.defaultColor as string)
      .brighten(3)
      .hex(),

    fontSize: "12px",
    fontWeight: "600",
    fontFamily: "Inter",
    childHoverStyle: {
      backgroundColor: chroma(theme.defaultColor as string)
        .brighten(0.5)
        .hex(),
    },
    childActiveStyle: {
      backgroundColor: chroma(theme.defaultColor as string)
        .darken(0.5)
        .hex(),
    },
  };

  text = {
    ...text,
    parentHoverStyle: {
      color: chroma(theme.defaultColor as string)
        .brighten(3)
        .hex(),
    },
  };

  icon = {
    ...icon,
    color: chroma(theme.defaultColor as string)
      .brighten(2.5)
      .hex(),
    theme: {
      maskedImageStyle: {
        parentHoverStyle: {
          backgroundColor: chroma(theme.defaultColor as string)
            .brighten(3)
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
        .alpha(0.27)
        .hex() || "#00000027",
  };

  buttonContainer = { ...buttonContainer, ...theme.buttonContainer };
  button = { ...button, ...theme.button };
  disabledLayer = { ...disabledLayer, ...theme.disabledLayer };

  icon = { ...icon, ...theme.icon };
  text = { ...text, ...theme.text };

  return {
    buttonContainer,
    button,
    icon,
    text,
    disabledLayer,
  };
}
