import {
  EYLComponentsNames,
  EYLMediaQueryBreakPoints,
  YLComponentName,
} from "./yl-global-enums";
import {
  IBackgroundImage,
  IMargin,
  IYLMediaQueryBreakPoints,
  IPadding,
  YLMediaQueryBreakPoints,
  IBorderRadius,
  IBorder,
  IYLMediaQuery,
  IYLHoverState,
  YLHoverStylePropNames,
  ITransition,
} from "./yl-global-interfaces";
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

export function ifPropertyDo<T extends Object>(
  object: T,
  prop: keyof T | (keyof T)[],
  cb: (object: Required<T>) => void
) {
  if (Array.isArray(prop)) {
    let isProps = prop.map((prop) => {
      return Object.hasOwn(object, prop);
    });

    if (isProps.includes(false)) {
      return;
    } else {
      cb(object as Required<T>);
    }
  } else {
    if (Object.hasOwn(object, prop)) {
      cb(object as Required<T>);
    } else {
      return;
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

export function createStyleObject<
  YLComponentStyle extends string,
  IYLComponentProps extends {}
>(
  objectStyleName: YLComponentName,
  initValueObject: Partial<IYLComponentProps>
) {
  let styleObject: Partial<Record<YLComponentStyle, string>> = {};

  Object.entries(initValueObject).forEach((entry) => {
    if (entry[1]) {
      const kebabCase = mapCamelCaseToKebabCase(entry[0]);
      const keyString = "--" + objectStyleName + "-" + kebabCase;

      styleObject[keyString as YLComponentStyle] = entry[1] as string;
    }
  });
  return styleObject;
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

export function createStateStyleObject<
  YLComponentStyle extends string,
  YLStateStyle extends string,
  IYLComponentProps extends {}
>(
  objectStyleName: EYLComponentsNames,
  stateStyleName: YLStateStyle,
  initValueObject: Partial<IYLComponentProps>
) {
  const hoverObjects: Partial<IYLHoverState<YLComponentStyle>> = {};

  Object.entries(initValueObject).forEach((entry) => {
    const kebabCase = mapCamelCaseToKebabCase(entry[0]);

    const styleObjectKey = "--" + objectStyleName + "-" + kebabCase;

    const keyString = `${styleObjectKey}-${stateStyleName}`;

    hoverObjects[keyString as YLHoverStylePropNames<YLComponentStyle>] =
      entry[1] as string;
  });

  return hoverObjects;
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

export function createMediaQueryStyleObject<
  YLComponentStyle extends string,
  IYLComponentProps extends {}
>(
  objectStyleName: EYLComponentsNames,
  initValueObject: Partial<
    Record<YLMediaQueryBreakPoints, Partial<IYLComponentProps>>
  >
) {
  const mediaQueryObjects: Partial<IYLMediaQueryBreakPoints<YLComponentStyle>> =
    {};

  Object.entries(initValueObject).forEach((entry) => {
    mediaQueryObjects[entry[0]] = {};

    Object.entries(entry[1]).forEach((subEntry) => {
      const kebabCase = mapCamelCaseToKebabCase(subEntry[0]);

      const styleObjectKey = "--" + objectStyleName + "-" + kebabCase;

      const keyString = `${styleObjectKey}-${entry[0]}`;

      mediaQueryObjects[entry[0]][keyString] = subEntry[1];
    });
  });

  return mediaQueryObjects;
}

export function splitMediaQueryObject<
  IYLComponentStyleProps,
  YLPropertyNames extends keyof IYLComponentStyleProps
>(
  mediaQueryObject: Partial<
    Record<YLMediaQueryBreakPoints, Partial<IYLComponentStyleProps>>
  >,
  properties: YLPropertyNames[]
): [
  Partial<
    Record<
      YLMediaQueryBreakPoints,
      Partial<Pick<IYLComponentStyleProps, YLPropertyNames>>
    >
  >,
  Partial<
    Record<
      YLMediaQueryBreakPoints,
      Partial<Omit<IYLComponentStyleProps, YLPropertyNames>>
    >
  >
] {
  const propsMediaQueryObjects: Partial<
    Record<
      YLMediaQueryBreakPoints,
      Partial<Pick<IYLComponentStyleProps, YLPropertyNames>>
    >
  > = {};
  const restMediaQueryObjects: Partial<
    Record<
      YLMediaQueryBreakPoints,
      Partial<Omit<IYLComponentStyleProps, YLPropertyNames>>
    >
  > = {};

  Object.entries(mediaQueryObject).forEach((entry) => {
    propsMediaQueryObjects[entry[0] as YLMediaQueryBreakPoints] = {};
    restMediaQueryObjects[entry[0] as YLMediaQueryBreakPoints] = {};

    Object.entries(entry[1]).forEach((subEntry) => {
      if (properties.includes(subEntry[0] as YLPropertyNames)) {
        const tempObj =
          propsMediaQueryObjects[entry[0] as YLMediaQueryBreakPoints];
        if (tempObj) {
          tempObj[subEntry[0] as YLPropertyNames] = subEntry[1] as
            | IYLComponentStyleProps[YLPropertyNames]
            | undefined;
        }
      } else {
        const tempObj =
          restMediaQueryObjects[entry[0] as YLMediaQueryBreakPoints];
        if (tempObj) {
          tempObj[
            subEntry[0] as keyof Omit<IYLComponentStyleProps, YLPropertyNames>
          ] = subEntry[1] as
            | IYLComponentStyleProps[Exclude<
                keyof IYLComponentStyleProps,
                YLPropertyNames
              >]
            | undefined;
        }
      }
    });
  });

  return [propsMediaQueryObjects, restMediaQueryObjects];
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

function mapCamelCaseToKebabCase(prop: string) {
  const upperCaseIndexes = [];
  for (let index = 0; index < prop.length; index++) {
    if (
      prop.charCodeAt(index) >= "A".charCodeAt(0) &&
      prop.charCodeAt(index) <= "Z".charCodeAt(0)
    ) {
      upperCaseIndexes.push(index);
    }
  }

  let kebabCaseProp = "";
  let previousIndex = 0;

  if (upperCaseIndexes.length > 0) {
    for (let index = 0; index < upperCaseIndexes.length; index++) {
      kebabCaseProp +=
        prop.substring(previousIndex, upperCaseIndexes[index]) +
        "-" +
        prop[upperCaseIndexes[index]].toLowerCase();
      if (upperCaseIndexes[index + 1]) {
        kebabCaseProp += prop.substring(
          upperCaseIndexes[index] + 1,
          upperCaseIndexes[index + 1]
        );
        previousIndex = upperCaseIndexes[index + 1];
      } else {
        kebabCaseProp += prop.substring(
          upperCaseIndexes[index] + 1,
          prop.length
        );
      }
    }
  } else {
    kebabCaseProp = prop;
  }
  return kebabCaseProp;
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

export function infer2ValuesFromCSSPropString(cssPropString: string) {
  let values = [];
  let cssValues = takeValuesFromCSSPropString(cssPropString);

  if (cssValues.length == 1) {
    values.push(cssValues[0]);
    values.push(cssValues[0]);
  } else {
    values.push(cssValues[0]);
    values.push(cssValues[1]);
  }

  return values;
}

export function infer4ValuesFromCSSPropString(cssPropString: string) {
  let values = [];
  let cssValues = takeValuesFromCSSPropString(cssPropString);

  switch (cssValues.length) {
    case 1:
      values.push(cssValues[0]);
      values.push(cssValues[0]);
      values.push(cssValues[0]);
      values.push(cssValues[0]);
      break;
    case 2:
      values.push(cssValues[0]);
      values.push(cssValues[1]);
      values.push(cssValues[0]);
      values.push(cssValues[1]);
      break;
    case 3:
      values.push(cssValues[0]);
      values.push(cssValues[1]);
      values.push(cssValues[2]);
      values.push(cssValues[1]);
      break;
    case 4:
      values.push(cssValues[0]);
      values.push(cssValues[1]);
      values.push(cssValues[2]);
      values.push(cssValues[3]);
      break;
  }
  return values;
}

export function takeValuesFromCSSPropString(cssPropString: string) {
  return cssPropString.split(" ");
}
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export function initPaddingValues(props: IPadding) {
  if (props.padding) {
    let paddingPositionValues = infer4ValuesFromCSSPropString(props.padding);

    if (!props.paddingBlockStart) {
      props.paddingBlockStart = paddingPositionValues[0];
    }
    if (!props.paddingInlineEnd) {
      props.paddingInlineEnd = paddingPositionValues[1];
    }
    if (!props.paddingBlockEnd) {
      props.paddingBlockEnd = paddingPositionValues[2];
    }
    if (!props.paddingInlineStart) {
      props.paddingInlineStart = paddingPositionValues[3];
    }
  }

  if (props.paddingBlock) {
    let paddingPositionValues = infer2ValuesFromCSSPropString(
      props.paddingBlock
    );

    if (!props.paddingBlockStart) {
      props.paddingBlockStart = paddingPositionValues[0];
    }

    if (!props.paddingBlockEnd) {
      props.paddingBlockEnd = paddingPositionValues[1];
    }
  }

  if (props.paddingInline) {
    let paddingPositionValues = infer2ValuesFromCSSPropString(
      props.paddingInline
    );

    if (!props.paddingInlineStart) {
      props.paddingInlineStart = paddingPositionValues[0];
    }

    if (!props.paddingInlineEnd) {
      props.paddingInlineEnd = paddingPositionValues[1];
    }
  }
}

export function initMarginValues(props: IMargin) {
  if (props.margin) {
    let marginPositionValues = infer4ValuesFromCSSPropString(props.margin);

    if (!props.marginBlockStart) {
      props.marginBlockStart = marginPositionValues[0];
    }
    if (!props.marginInlineEnd) {
      props.marginInlineEnd = marginPositionValues[1];
    }
    if (!props.marginBlockEnd) {
      props.marginBlockEnd = marginPositionValues[2];
    }
    if (!props.marginInlineStart) {
      props.marginInlineStart = marginPositionValues[3];
    }
  }

  if (props.marginBlock) {
    let marginPositionValues = infer2ValuesFromCSSPropString(props.marginBlock);

    if (!props.marginBlockStart) {
      props.marginBlockStart = marginPositionValues[0];
    }

    if (!props.marginBlockEnd) {
      props.marginBlockEnd = marginPositionValues[1];
    }
  }

  if (props.marginInline) {
    let marginPositionValues = infer2ValuesFromCSSPropString(
      props.marginInline
    );

    if (!props.marginInlineStart) {
      props.marginInlineStart = marginPositionValues[0];
    }

    if (!props.marginInlineEnd) {
      props.marginInlineEnd = marginPositionValues[1];
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export function initBorderRadiusValues(props: IBorderRadius) {
  if (props.borderRadius) {
    let borderRadiusPositionValues = infer4ValuesFromCSSPropString(
      props.borderRadius
    );

    if (!props.borderStartStartRadius) {
      props.borderStartStartRadius = borderRadiusPositionValues[0];
    }
    if (!props.borderStartEndRadius) {
      props.borderStartEndRadius = borderRadiusPositionValues[1];
    }
    if (!props.borderEndEndRadius) {
      props.borderEndEndRadius = borderRadiusPositionValues[2];
    }
    if (!props.borderEndStartRadius) {
      props.borderEndStartRadius = borderRadiusPositionValues[3];
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export function initBorderValues(props: IBorder) {
  if (props.border) {
    if (!props.borderBlockStart) {
      props.borderBlockStart = props.border;
    }
    if (!props.borderInlineEnd) {
      props.borderInlineEnd = props.border;
    }
    if (!props.borderBlockEnd) {
      props.borderBlockEnd = props.border;
    }
    if (!props.borderInlineStart) {
      props.borderInlineStart = props.border;
    }
  }

  if (props.borderBlock) {
    if (!props.borderBlockStart) {
      props.borderBlockStart = props.borderBlock;
    }

    if (!props.borderBlockEnd) {
      props.borderBlockEnd = props.borderBlock;
    }
  }

  if (props.borderInline) {
    if (!props.borderInlineStart) {
      props.borderInlineStart = props.borderInline;
    }

    if (!props.borderInlineEnd) {
      props.borderInlineEnd = props.borderInline;
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export function initTransitionValues(props: ITransition) {
  if (props.transitionProperty) {
  } else {
    if (props.transition) {
      const properties = props.transition.split(" ");

      props.transitionProperty = properties[0];
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export function initBackgroundPositionValues(props: IBackgroundImage) {
  if (props.backgroundPosition) {
    let backgroundPositionValues = infer2ValuesFromCSSPropString(
      props.backgroundPosition
    );

    if (!props.backgroundPositionX) {
      props.backgroundPositionX = backgroundPositionValues[0];
    }
    if (!props.backgroundPositionY) {
      props.backgroundPositionY = backgroundPositionValues[1];
    }
  }
}
