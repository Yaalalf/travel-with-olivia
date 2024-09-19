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
  activeStyle,
  parentActiveStyle,
  childActiveStyle,
  childHoverStyle,
  initProps,
}: {
  name: EYLComponentsNames;
  hoverStyle: IYLComponentProps;
  parentHoverStyle: IYLComponentProps;
  childHoverStyle: IYLComponentProps;

  activeStyle: IYLComponentProps;
  parentActiveStyle: IYLComponentProps;
  childActiveStyle: IYLComponentProps;

  initProps?: (props: Partial<IYLComponentProps>) => void;
}) {
  //Working in the styles
  if (initProps) {
    initProps(hoverStyle);
    initProps(parentHoverStyle);
    initProps(childHoverStyle);

    initProps(activeStyle);
    initProps(parentActiveStyle);
    initProps(childActiveStyle);
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

  let componentChildHoverStyle = createStateStyleObject<
    YLComponentStyle,
    YLStateStylesName,
    IYLComponentProps
  >(
    name as EYLComponentsNames,
    EYLStateStylesNames.CHILD_HOVER,
    childHoverStyle
  );

  let componentActiveStyle = createStateStyleObject<
    YLComponentStyle,
    YLStateStylesName,
    IYLComponentProps
  >(name as EYLComponentsNames, EYLStateStylesNames.ACTIVE, activeStyle);

  let componentParentActiveStyle = createStateStyleObject<
    YLComponentStyle,
    YLStateStylesName,
    IYLComponentProps
  >(
    name as EYLComponentsNames,
    EYLStateStylesNames.PARENT_ACTIVE,
    parentActiveStyle
  );

  let componentChildActiveStyle = createStateStyleObject<
    YLComponentStyle,
    YLStateStylesName,
    IYLComponentProps
  >(
    name as EYLComponentsNames,
    EYLStateStylesNames.CHILD_ACTIVE,
    childActiveStyle
  );

  return {
    hoverStyles: componentHoverStyle,
    parentHoverStyles: componentParentHoverStyle,
    childHoverStyles: componentChildHoverStyle,
    activeStyles: componentActiveStyle,
    parentActiveStyles: componentParentActiveStyle,
    childActiveStyles: componentChildActiveStyle,
  };
}
