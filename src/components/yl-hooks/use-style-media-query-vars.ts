import {
  EYLComponentsNames,
  EYLMediaQueryBreakPoints,
  YLComponentName,
} from "../yl-utils/yl-global-enums";
import {
  YLComponentMediaQueryStyle,
  YLMediaQueryBreakPoints,
} from "../yl-utils/yl-global-interfaces";
import {
  createMediaQueryStyleObject,
  createStyleObject,
} from "../yl-utils/yl-utils";

export function useYLComponentStyleMediaQueryVars<
  YLComponentStyle extends string,
  IYLComponentProps extends {}
>({
  name,
  props,
  mediaQuery,
  initProps,
}: {
  name: EYLComponentsNames;
  props: Partial<IYLComponentProps>;
  mediaQuery: Partial<
    Record<YLMediaQueryBreakPoints, Partial<IYLComponentProps>>
  >;
  initProps?: (props: Partial<IYLComponentProps>) => void;
}) {
  //Working in the styles
  initProps && initProps(props);

  let componentStyle = createStyleObject<YLComponentStyle, IYLComponentProps>(
    name as YLComponentName,
    props
  );

  //Working in the Media Queries

  Object.entries(mediaQuery).forEach((entry) => {
    initProps && initProps(entry[1]);
  });
  let componentStyleMediaQuery = createMediaQueryStyleObject<
    YLComponentStyle,
    IYLComponentProps
  >(name, mediaQuery);

  //Merging Style and MediaQuery

  let componentFullStyle = {
    ...componentStyle,
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.mobileFull],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.mobile360],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.mobile480],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.mobile600],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.mobile900],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.desktopFull],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.desktop1024],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.desktop1280],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.desktop1440],
    ...componentStyleMediaQuery[EYLMediaQueryBreakPoints.desktop1600],
  } as YLComponentMediaQueryStyle<YLComponentStyle>;
  return { styles: componentFullStyle };
}
