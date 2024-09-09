import { YLBackgroundColor } from "@/components/yl-layouts/yl-background-color/yl-background-color";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLCard from "@/components/yl-layouts/yl-card/yl-card";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import {
  EYLTextHeaderTextAlign,
  EYLTextHeaderTransform,
} from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { ETextTransform } from "@/components/yl-utils/yl-global-enums";
import { ETag, IText } from "@/components/yl-utils/yl-global-interfaces";
import YLTitleHeaderDoubleText from "@/components/yl-web-landing-page/yl-title-headers/yl-title-header-double-text/yl-title-header-double-text";
import { Fragment } from "react";

export default function BestOffersSection() {
  return (
    <YLContainer tag={ETag.section} blockSize="auto" paddingBlockEnd="80px">
      <YLBackgroundColor backgroundColor="white" />
      <YLFlexContainer
        paddingBlockStart="80px"
        flexDirection="column"
        justifyContent="flex-start"
        gap="4px"
      >
        <YLTitleHeaderDoubleText
          primaryText="Best  Offers"
          secondaryText="Check Out our top-rated tours"
          primaryTitleStyle={{ ...textHeaderStyle, tag: ETag.h2, order: "1" }}
          secondaryTitleStyle={{
            ...textHeaderStyle,
            tag: ETag.h3,
            order: "1",
            fontSize: "18px",
            lineHeight: "26px",

            fontWeight: "800",
            color: "#333",
          }}
          containerStyle={{ gap: "0px" }}
        />

        <YLFlexContainer
          inlineSize="1000px"
          flexWrap="wrap"
          gap="16px"
          marginBlockStart="40px"
        >
          {[0, 0, 0, 0, 0, 0].map((item, index) => (
            <Fragment key={index}>
              <YLCard
                inlineSize="320px"
                blockSize="340px"
                backgroundColor="#eee"
              >
                <YLBackgroundImage position="relative" blockSize="80%" />
                <YLFlexContainer
                  inlineSize="100%"
                  blockSize="20%"
                  paddingInline="12px"
                  justifyContent="space-between"
                >
                  <YLText
                    tag={ETag.span}
                    fontSize="16px"
                    textTransform={ETextTransform.uppercase}
                    fontFamily="Nunito"
                    fontWeight="800"
                    color="#333"
                  ></YLText>
                  <YLText
                    tag={ETag.span}
                    fontSize="16px"
                    textTransform={ETextTransform.uppercase}
                    fontFamily="Nunito"
                    fontWeight="800"
                    color="#333"
                  ></YLText>
                </YLFlexContainer>
              </YLCard>
            </Fragment>
          ))}
        </YLFlexContainer>
      </YLFlexContainer>
    </YLContainer>
  );
}
export const textHeaderStyle: IText = {
  fontSize: "34px",
  textTransform: "uppercase",
  fontFamily: "Nunito",
  fontWeight: "900",
  textAlign: "center",
  lineHeight: "36px",
  color: "#222222",
};
