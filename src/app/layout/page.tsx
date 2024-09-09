"use client";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import {
  EBlueSwath,
  EWhiteSwatch,
  EYLMediaQueryBreakPoints,
} from "@/components/yl-utils/yl-global-enums";
import YLTitleHeaderDoubleTextDecoratorPhantomText from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text-decorator-phantom-text/yl-title-header-double-text-decorator-phantom-text";
import YLTitleHeaderDoubleText from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text/yl-title-header-double-text";
import YlButton, { EYLButtonStyle } from "@/components/yl-library/yl-button";
import { ReactNode, useState } from "react";
import {
  TextAlign,
  TextTransform,
} from "@/components/yl-utils/yl-global-interfaces";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import YLTitleHeaderDoubleTextInvert from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text-invert/yl-title-header-double-text-invert";
import YLTitledContent from "@/components/yl-web-landing-page/yl-titled-content/yl-titled-content";
import YlContainer from "@/components/yl-layouts/yl-container/yl-container";

export default function Layout() {
  const [alignItems, setAlignItems] = useState<TextAlign[]>([
    "left",
    "left",
    "left",
    "left",
  ]);

  const [textTransforms, setTextTransforms] = useState<TextTransform[]>([
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);
  const [selectedAlign, setSelectedAlign] = useState<number[]>([0, 0, 0, 0, 0]);
  const [selectedTextTransform, setSelectedTextTransform] = useState<number[]>([
    0, 0, 0, 0, 0,
  ]);

  const componentHeaders: { name: string; component: ReactNode }[] = [
    {
      name: "yl-text-header",
      component: (
        <YLTextHeader
          {...{
            fontSize: "52px",
            lineHeight: "58px",
            textTransform: textTransforms[0],
            fontFamily: "Nunito",
            fontWeight: "700",
            textAlign: alignItems[0],
            mediaQuery: {
              [EYLMediaQueryBreakPoints.mobileFull]: {
                fontSize: "32px",
                lineHeight: "38px",
                inlineSize: "90%",
              },
            },
          }}
        />
      ),
    },
    {
      name: "yl-title-header-double-text",
      component: (
        <YLTitleHeaderDoubleText
          inlineSize="600px"
          textAlign={alignItems[1]}
          textTransform={textTransforms[1]}
          containerStyle={{ mediaQuery: { "360-1024": { inlineSize: "90%" } } }}
        />
      ),
    },
    {
      name: "yl-title-header-double-text-invert",
      component: (
        <YLTitleHeaderDoubleTextInvert
          invert
          inlineSize="600px"
          textAlign={alignItems[2]}
          textTransform={textTransforms[2]}
        />
      ),
    },
    {
      name: "yl-title-header-double-text-decorator-phantom-text",
      component: (
        <YLTitleHeaderDoubleTextDecoratorPhantomText
          textAlign={alignItems[3]}
          textTransform={textTransforms[3]}
        />
      ),
    },
    {
      name: "yl-titled-content",
      component: (
        <YLTitledContent
          inlineSize="700px"
          textAlign={alignItems[4]}
          textTransform={textTransforms[4]}
        ></YLTitledContent>
      ),
    },
  ];

  return (
    <main className="yl-theme-basic" style={{ overflow: "hidden" }}>
      <YLFlexContainer
        inlineSize="100%"
        paddingBlock="32px"
        backgroundColor={EBlueSwath.blue4}
      >
        <YLTextHeader
          color={EWhiteSwatch.white2}
          fontFamily="sans-serif"
          fontWeight="600"
          fontSize="40px"
          textAlign="center"
        >
          Diseño de Encabezados
        </YLTextHeader>
      </YLFlexContainer>

      {componentHeaders.map((data, index) => (
        <YLFlexContainer
          inlineSize="100%"
          paddingBlockEnd="120px"
          paddingBlockStart="40px"
          flexDirection="column"
          justifyContent="flex-start"
          backgroundColor={
            index % 2 == 0 ? EWhiteSwatch.white2 : EWhiteSwatch.white4
          }
          key={alignItems[index] + "-" + index}
          mediaQuery={{ "360-1024": { alignItems: "center" } }}
        >
          <YlContainer
            inlineSize="100%"
            paddingInlineStart="140px"
            marginBlockEnd="20px"
            mediaQuery={{
              "360-1024": {
                paddingInlineStart: "0",
                inlineSize: "280px",
              },
            }}
          >
            <YLText
              mediaQuery={{
                "360-1024": {
                  textAlign: "center",
                },
              }}
            >
              {data.name}
            </YLText>
          </YlContainer>
          <YLFlexContainer
            inlineSize="100%"
            blockSize="80px"
            marginBlockEnd="80px"
            paddingInline="40px"
            justifyContent="flex-start"
            flexWrap="wrap"
            gap="20px"
            flexDirection="column"
            mediaQuery={{
              "360-1024": {
                paddingInline: "8px",
                marginBlockEnd: "20px",
                gap: "12px",
                flexWrap: "nowrap",
                blockSize: "auto",
                alignItems: "flex-start",
              },
            }}
          >
            <YLFlexContainer
              gap="20px"
              mediaQuery={{
                "360-1024": {
                  gap: "8px",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                },
              }}
            >
              <YLText fontSize="12px" fontWeight="600" fontFamily="sans-serif">
                Align:
              </YLText>
              <YlButton
                onClick={() => {
                  const currentAlign = [...alignItems];
                  currentAlign[index] = "left";
                  setAlignItems(currentAlign);

                  const currentSelected = [...selectedAlign];
                  currentSelected[index] = 0;
                  setSelectedAlign(currentSelected);
                }}
                collapsed
                style={
                  selectedAlign[index] == 0
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                Left
              </YlButton>
              <YlButton
                onClick={() => {
                  const currentAlign = [...alignItems];
                  currentAlign[index] = "center";
                  setAlignItems(currentAlign);

                  const currentSelected = [...selectedAlign];
                  currentSelected[index] = 1;
                  setSelectedAlign(currentSelected);
                }}
                collapsed
                style={
                  selectedAlign[index] == 1
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                Center
              </YlButton>
              <YlButton
                onClick={() => {
                  const currentAlign = [...alignItems];
                  currentAlign[index] = "right";
                  setAlignItems(currentAlign);

                  const currentSelected = [...selectedAlign];
                  currentSelected[index] = 2;
                  setSelectedAlign(currentSelected);
                }}
                collapsed
                style={
                  selectedAlign[index] == 2
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                Right
              </YlButton>
            </YLFlexContainer>
            <YLFlexContainer
              gap="20px"
              mediaQuery={{
                "360-1024": {
                  gap: "8px",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                },
              }}
            >
              <YLText fontSize="12px" fontWeight="600" fontFamily="sans-serif">
                Text Transform:
              </YLText>
              <YlButton
                onClick={() => {
                  const currentTextTransform = [...textTransforms];
                  currentTextTransform[index] = "none";
                  setTextTransforms(currentTextTransform);

                  const currentSelected = [...selectedTextTransform];
                  currentSelected[index] = 0;
                  setSelectedTextTransform(currentSelected);
                }}
                collapsed
                style={
                  selectedTextTransform[index] == 0
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                None
              </YlButton>
              <YlButton
                onClick={() => {
                  const currentTextTransform = [...textTransforms];
                  currentTextTransform[index] = "uppercase";
                  setTextTransforms(currentTextTransform);

                  const currentSelected = [...selectedTextTransform];
                  currentSelected[index] = 1;
                  setSelectedTextTransform(currentSelected);
                }}
                collapsed
                style={
                  selectedTextTransform[index] == 1
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                Uppercase
              </YlButton>
              <YlButton
                onClick={() => {
                  const currentTextTransform = [...textTransforms];
                  currentTextTransform[index] = "lowercase";
                  setTextTransforms(currentTextTransform);

                  const currentSelected = [...selectedTextTransform];
                  currentSelected[index] = 2;
                  setSelectedTextTransform(currentSelected);
                }}
                collapsed
                style={
                  selectedTextTransform[index] == 2
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                Lowercase
              </YlButton>
              <YlButton
                onClick={() => {
                  const currentTextTransform = [...textTransforms];
                  currentTextTransform[index] = "capitalize";
                  setTextTransforms(currentTextTransform);

                  const currentSelected = [...selectedTextTransform];
                  currentSelected[index] = 3;
                  setSelectedTextTransform(currentSelected);
                }}
                collapsed
                style={
                  selectedTextTransform[index] == 3
                    ? EYLButtonStyle.Filled
                    : EYLButtonStyle.Outlined
                }
              >
                Capitalize
              </YlButton>
            </YLFlexContainer>
          </YLFlexContainer>
          {data.component}
        </YLFlexContainer>
      ))}
    </main>
  );
}
