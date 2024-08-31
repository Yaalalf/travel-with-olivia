import { YLBackdropFilter } from "@/components/yl-layouts/yl-backdrop-filter/yl-backdrop-filter";
import { YLBackgroundColor } from "@/components/yl-layouts/yl-background-color/yl-background-color";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import { YLDecoratorImage } from "@/components/yl-layouts/yl-decorator-image/yl-decorator-image";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";

import {
  EYLTextHeaderTextAlign,
  EYLTextHeaderTransform,
} from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";

export default function WyChooseSection() {
  return (
    <YLContainer tag={ETag.section} inlineSize="100%">
      <YLBackgroundImage />
      <YLBackdropFilter backdropFilter="blur(2px)" />
      <YLBackgroundColor opacity="0.5" backgroundColor="#000" />
      <YLFlexContainer>
        <YLFlexContainer
          inlineSize="1000px"
          paddingBlock="100px"
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

          <YLFlexContainer inlineSize="100%" gap="32px" marginBlockStart="32px">
            {[0, 0, 0].map(() => (
              <YLFlexContainer
                flexDirection="column"
                inlineSize="360px"
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
                  <YLDecoratorImage
                    position="relative"
                    inlineSize="50%"
                    blockSize="50%"
                  ></YLDecoratorImage>
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
            ))}
          </YLFlexContainer>
        </YLFlexContainer>
      </YLFlexContainer>
    </YLContainer>
  );
}
