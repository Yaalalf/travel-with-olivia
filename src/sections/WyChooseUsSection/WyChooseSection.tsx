import YLBackgroundContainer from "@/components/yl-web-landing-page/yl-background-container/yl-background-container";
import { YLDecoratorImage } from "@/components/yl-layouts/yl-decorator-image/yl-decorator-image";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { YLMaskedImage } from "@/components/yl-layouts/yl-masked-image/yl-masked-image";

import {
  EYLTextHeaderTextAlign,
  EYLTextHeaderTransform,
} from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";
import { Fragment } from "react";

export default function WyChooseSection() {
  return (
    <YLBackgroundContainer
      containerStyle={{ tag: "section", paddingBlock: "80px" }}
      backgroundColorStyle={{ opacity: "0.5" }}
    >
      <YLFlexContainer
        inlineSize="100%"
        flexDirection="column"
        justifyContent="flex-start"
        gap="4px"
      >
        <YLTextHeader
          tag={ETag.h2}
          fontSize="28px"
          textTransform={EYLTextHeaderTransform.uppercase}
          fontFamily="Nunito"
          fontWeight="900"
          color="white"
          textShadow="0px 3px 6px #00000050"
          textAlign={EYLTextHeaderTextAlign.center}
        ></YLTextHeader>

        <YLTextHeader
          tag={ETag.h3}
          fontSize="18px"
          textTransform={EYLTextHeaderTransform.uppercase}
          fontFamily="Nunito"
          fontWeight="400"
          color="white"
          textShadow="0px 3px 6px #00000050"
          textAlign={EYLTextHeaderTextAlign.center}
        ></YLTextHeader>

        <YLFlexContainer inlineSize="100%" gap="32px" marginBlockStart="40px">
          {[0, 0, 0].map((item, index) => (
            <Fragment key={index}>
              <YLFlexContainer
                flexDirection="column"
                inlineSize="320px"
                gap="20px"
              >
                <YLFlexContainer
                  inlineSize="100px"
                  blockSize="100px"
                  borderRadius="100%"
                  backgroundColor="white"
                  boxShadow="0px 3px 6px #00000020"
                  overflow="hidden"
                >
                  <YLMaskedImage
                    backgroundColor="#999"
                    position="relative"
                    inlineSize="50%"
                    blockSize="50%"
                  ></YLMaskedImage>
                </YLFlexContainer>

                <YLTextHeader
                  tag={ETag.h3}
                  fontSize="22px"
                  textTransform={EYLTextHeaderTransform.uppercase}
                  fontFamily="Nunito"
                  fontWeight="800"
                  color="white"
                  textShadow="0px 3px 6px #00000050"
                  textAlign={EYLTextHeaderTextAlign.center}
                ></YLTextHeader>
                <YLText tag={ETag.p} fontSize="16px" color="#eee"></YLText>
              </YLFlexContainer>
            </Fragment>
          ))}
        </YLFlexContainer>
      </YLFlexContainer>
    </YLBackgroundContainer>
  );
}
