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

export function createMediaQueryObjects<
  RecordKeys extends string,
  Type extends { [index: string]: string | undefined },
  InitialValueType extends Object
>(
  styleObject: Type,
  initValueObject: Partial<Record<YLMediaQueryBreakPoints, InitialValueType>>
) {
  const mediaQueryObjects: Partial<IYLMediaQueryBreakPoints<RecordKeys>> = {};

  Object.entries(initValueObject).forEach((entry) => {
    mediaQueryObjects[entry[0]] = {};

    Object.entries(entry[1]).forEach((subEntry) => {
      const kebabCase = mapCamelCaseToKebabCase(subEntry[0]);

      const styleObjectKey = Object.keys(styleObject).filter((key) => {
        let result = key.match(kebabCase);
        if (result) return result.length > 0;
        return false;
      })[0];

      const keyString = `${styleObjectKey}-${entry[0]}`;

      mediaQueryObjects[entry[0]][keyString] = subEntry[1];
    });
  });

  return mediaQueryObjects;
}

export function createMediaQueryFullObjects<
  RecordKeys extends string,
  Type extends { [index: string]: string | undefined }
>(styleObject: Type) {
  const mediaQueryObjects: IYLMediaQueryBreakPoints<RecordKeys> = {
    [EYLMediaQueryBreakPoints.mobileFull]: {},
    [EYLMediaQueryBreakPoints.mobile360]: {},
    [EYLMediaQueryBreakPoints.mobile480]: {},
    [EYLMediaQueryBreakPoints.mobile600]: {},
    [EYLMediaQueryBreakPoints.mobile900]: {},
    [EYLMediaQueryBreakPoints.desktopFull]: {},
    [EYLMediaQueryBreakPoints.desktop1024]: {},
    [EYLMediaQueryBreakPoints.desktop1280]: {},
    [EYLMediaQueryBreakPoints.desktop1440]: {},
    [EYLMediaQueryBreakPoints.desktop1600]: {},
  };

  Object.entries(styleObject).forEach((entry) => {
    Object.keys(mediaQueryObjects).forEach((key) => {
      const keyString = `${entry[0]}-${key}`;
      mediaQueryObjects[key][keyString] = entry[1];
    });
  });

  return mediaQueryObjects;
}

export function populateMediaQueryObject<
  RecordKeys extends string,
  Type extends Object
>(
  mediaQueryObject: IYLMediaQueryBreakPoints<RecordKeys>,
  initValueObject: Partial<Record<YLMediaQueryBreakPoints, Type>>
) {
  Object.entries(initValueObject).forEach((entry) => {
    Object.entries(entry[1]).forEach((subEntry) => {
      const kebabCase = mapCamelCaseToKebabCase(subEntry[0]);

      const key = Object.keys(mediaQueryObject[entry[0]]).filter((key) => {
        let result = key.match(kebabCase);
        if (result) return result.length > 0;
        return false;
      });

      mediaQueryObject[entry[0]][key[0]] = subEntry[1];
    });
  });
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
    let paddingPositionValues = infer4ValuesFromCSSPropString(props.margin);

    if (!props.marginBlockStart) {
      props.marginBlockStart = paddingPositionValues[0];
    }
    if (!props.marginInlineEnd) {
      props.marginInlineEnd = paddingPositionValues[1];
    }
    if (!props.marginBlockEnd) {
      props.marginBlockEnd = paddingPositionValues[2];
    }
    if (!props.marginInlineStart) {
      props.marginInlineStart = paddingPositionValues[3];
    }
  }

  if (props.marginBlock) {
    let paddingPositionValues = infer2ValuesFromCSSPropString(
      props.marginBlock
    );

    if (!props.marginBlockStart) {
      props.marginBlockStart = paddingPositionValues[0];
    }

    if (!props.marginBlockEnd) {
      props.marginBlockEnd = paddingPositionValues[1];
    }
  }

  if (props.marginInline) {
    let paddingPositionValues = infer2ValuesFromCSSPropString(
      props.marginInline
    );

    if (!props.marginInlineStart) {
      props.marginInlineStart = paddingPositionValues[0];
    }

    if (!props.marginInlineEnd) {
      props.marginInlineEnd = paddingPositionValues[1];
    }
  }
}

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
export function initBorderRadiusValues(props: IBorderRadius) {
  if (props.borderRadius) {
    let paddingPositionValues = infer4ValuesFromCSSPropString(
      props.borderRadius
    );

    if (!props.borderStartStartRadius) {
      props.borderStartStartRadius = paddingPositionValues[0];
    }
    if (!props.borderStartEndRadius) {
      props.borderStartEndRadius = paddingPositionValues[1];
    }
    if (!props.borderEndEndRadius) {
      props.borderEndEndRadius = paddingPositionValues[2];
    }
    if (!props.borderEndStartRadius) {
      props.borderEndStartRadius = paddingPositionValues[3];
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
