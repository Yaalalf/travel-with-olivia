import YLTitleHeaderDoubleText, {
  IYLTitleHeaderDoubleTextProps,
  IYLTitleStyle,
} from "../yl-title-header-double-text/yl-title-header-double-text";
import { IYLFlexContainerStyleProps } from "@/components/yl-layouts/yl-flex-container/types";

export default function YLTitleHeaderDoubleTextInvert({
  className,

  invert = false,

  primaryText,
  secondaryText,

  inlineSize,
  textAlign,
  textTransform,

  theme,
}: IYLTitleHeaderDoubleTextInvert) {
  return (
    <YLTitleHeaderDoubleText
      className={`${className || ""} yl-title-header-double-text-invert`}
      {...{ textAlign, textTransform, inlineSize, primaryText, secondaryText }}
      theme={{
        container: { ...defaultContainerStyle, ...theme?.container },
        primaryTitle: {
          ...defaultPrimaryTitleStyle,
          ...theme?.primaryTitle,
          order: invert ? "2" : "1",
        },
        secondaryTitle: {
          ...defaultSecondaryTitleStyle,
          ...theme?.secondaryTitle,
          order: invert ? "1" : "2",
        },
      }}
    ></YLTitleHeaderDoubleText>
  );
}
/************************DefaultValues*********************/
const defaultContainerStyle: IYLFlexContainerStyleProps = {};
const defaultPrimaryTitleStyle: IYLTitleStyle = {
  order: "1",
};
const defaultSecondaryTitleStyle: IYLTitleStyle = {};

/************************Types*********************/
export interface IYLTitleHeaderDoubleTextInvert
  extends IYLTitleHeaderDoubleTextProps {
  invert?: boolean;
}
