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

  containerStyle,
  primaryTitleStyle,
  secondaryTitleStyle,
}: IYLTitleHeaderDoubleTextInvert) {
  return (
    <YLTitleHeaderDoubleText
      className={`${className || ""} yl-title-header-double-text-invert`}
      {...{ textAlign, textTransform, inlineSize, primaryText, secondaryText }}
      containerStyle={{ ...defaultContainerStyle, ...containerStyle }}
      primaryTitleStyle={{
        ...defaultPrimaryTitleStyle,
        ...primaryTitleStyle,
        order: invert ? "2" : "1",
      }}
      secondaryTitleStyle={{
        ...defaultSecondaryTitleStyle,
        ...secondaryTitleStyle,
        order: invert ? "1" : "2",
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
