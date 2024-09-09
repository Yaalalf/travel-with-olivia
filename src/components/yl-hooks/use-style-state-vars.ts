import {
  EYLComponentsNames,
  EYLStateStylesNames,
  YLStateStylesName,
} from "../yl-utils/yl-global-enums";
import { createStateStyleObject } from "../yl-utils/yl-utils";

export function useYLComponentStateStylesVars<
  YLComponentStyle extends string,
  IYLComponentProps extends {}
>({
  name,
  parentHoverStyle,
  hoverStyle,
  initProps,
}: {
  name: EYLComponentsNames;
  hoverStyle: IYLComponentProps;
  parentHoverStyle: IYLComponentProps;
  initProps?: (props: Partial<IYLComponentProps>) => void;
}) {
  //Working in the styles
  if (initProps) {
    initProps(hoverStyle);
    initProps(parentHoverStyle);
  }

  let componentHoverStyle = createStateStyleObject<
    YLComponentStyle,
    YLStateStylesName,
    IYLComponentProps
  >(name as EYLComponentsNames, EYLStateStylesNames.HOVER, hoverStyle);

  let componentParentHoverStyle = createStateStyleObject<
    YLComponentStyle,
    YLStateStylesName,
    IYLComponentProps
  >(
    name as EYLComponentsNames,
    EYLStateStylesNames.PARENT_HOVER,
    parentHoverStyle
  );

  return {
    hoverStyles: componentHoverStyle,
    parentHoverStyles: componentParentHoverStyle,
  };
}
