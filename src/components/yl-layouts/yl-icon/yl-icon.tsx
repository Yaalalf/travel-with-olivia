import { ETag, IClassName } from "@/components/yl-utils/yl-global-interfaces";
import { YLMaskedImage } from "../yl-masked-image/yl-masked-image";
import YlFlexContainer from "../yl-flex-container/yl-flex-container";
import { EYLIcons, YLIcons } from "@/components/yl-utils/yl-global-enums";
import ArrowBackIcon from "@/components/yl-icons/arrow_back_icon";
import ArrowForwardIcon from "@/components/yl-icons/arrow_forward_icon";
import { IYLFlexContainerStyleProps } from "../yl-flex-container/types";
import { IYLMaskedImageStyleProps } from "../yl-masked-image/types";

export default function YLIcon({
  name,
  className,

  color,
  size,

  theme,
}: IYLIconProps) {
  const iconsPropsDefined: Omit<IYLIconProps, "className"> = {
    name: name,
  };
  color && (iconsPropsDefined.color = color);
  size && (iconsPropsDefined.size = size);

  return (
    <YlFlexContainer
      tag={ETag.span}
      className={`yl-icon ${className || ""}`}
      {...defaultContainerStyle}
      color={color}
      inlineSize={size}
      blockSize={size}
      {...theme?.containerStyle}
    >
      {!name.includes("/") &&
        IconFactory({ ...defaultIconProps, ...iconsPropsDefined })}
      {name.includes("/") && (
        <YLMaskedImage
          tag={ETag.span}
          className="yl-icon-container"
          maskImage={`url(${name})`}
          {...defaultMaskedImageStyle}
          {...theme?.maskedImageStyle}
        ></YLMaskedImage>
      )}
    </YlFlexContainer>
  );
}

function IconFactory({
  name,
  size,
  color,
}: {
  name: EYLIcons | YLIcons | string;
  color?: string;
  size?: string;
}) {
  const defaultOptions = {
    fill: color,
    size,
  };

  switch (name) {
    case EYLIcons.ARROW_BACK:
      return <ArrowBackIcon {...defaultOptions}></ArrowBackIcon>;

    case EYLIcons.ARROW_FORWARD:
      return <ArrowForwardIcon {...defaultOptions}></ArrowForwardIcon>;
  }
}

/************************DefaultValues******************************/

const defaultIconProps: Omit<IYLIconProps, "name" | "className"> = {
  color: "#3552a9",
  size: "28px",
};

const defaultContainerStyle: IYLFlexContainerStyleProps = {
  inlineSize: "28px",
  blockSize: "28px",
  padding: "0px",
  backgroundColor: "transparent",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const defaultMaskedImageStyle: IYLMaskedImageStyleProps = {
  inlineSize: "100%",
  blockSize: "100%",
  backgroundColor: "currentColor",
  maskSize: "contain",
  maskRepeat: "no-repeat",
  maskPosition: "center",
};

/************************Types******************************/
export interface IYLIconProps extends IClassName {
  name: EYLIcons | YLIcons | string;

  color?: string;
  size?: string;

  theme?: IIconTheme;
}

export interface IIconTheme {
  containerStyle?: IYLFlexContainerStyleProps;
  maskedImageStyle?: IYLMaskedImageStyleProps;
}
