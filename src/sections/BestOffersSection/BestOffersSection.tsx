import { YLBackgroundColor } from "@/components/yl-layouts/yl-background-color/yl-background-color";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLCard from "@/components/yl-layouts/yl-card/yl-card";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-old-files-for-test/yl-flex-container-old/yl-flex-container";
import {
  EYLTextHeaderTextAlign,
  EYLTextHeaderTransform,
} from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { ETextTransform } from "@/components/yl-utils/yl-global-enums";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";

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
        <YLTextHeader
          tag={ETag.h2}
          fontSize="28px"
          textTransform={EYLTextHeaderTransform.uppercase}
          fontFamily="Nunito"
          fontWeight="900"
          color="#222222"
          textAlign={EYLTextHeaderTextAlign.center}
        ></YLTextHeader>
        <YLTextHeader
          tag={ETag.h3}
          fontSize="24px"
          textTransform={EYLTextHeaderTransform.uppercase}
          fontFamily="Nunito"
          fontWeight="800"
          color="#333"
          textAlign={EYLTextHeaderTextAlign.center}
        ></YLTextHeader>

        <YLFlexContainer
          inlineSize="1000px"
          flexWrap="wrap"
          gap="16px"
          marginBlockStart="40px"
        >
          {[0, 0, 0, 0, 0, 0].map(() => (
            <YLCard inlineSize="320px" blockSize="340px" backgroundColor="#eee">
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
          ))}
        </YLFlexContainer>
      </YLFlexContainer>
    </YLContainer>
  );
}
