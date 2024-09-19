import YlContainer from "@/components/yl-layouts/yl-container/yl-container";
import { YLDecoratorImage } from "@/components/yl-layouts/yl-decorator-image/yl-decorator-image";
import YlFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { EWhiteSwatch } from "@/components/yl-utils/yl-global-enums";
import YLBackgroundContainer from "@/components/yl-web-landing-page/yl-background-container/yl-background-container";

import "./base.css";
import YLTransformCarrousel from "@/components/yl-layouts/yl-transform-carrousel.tsx/yl-transform-carrousel";
import { EYLButtonSize } from "@/components/yl-layouts/yl-buttons/yl-base-button/types";
import YlFilledButton from "@/components/yl-layouts/yl-buttons/yl-filled-button/yl-filled-button";
import YlButton from "@/components/yl-layouts/yl-buttons/yl-button/yl-button";

export default function MVCHeroSection() {
  return (
    <>
      <YLBackgroundContainer
        className="yl-theme-basic"
        blockSize="720px"
        imgUrl="/mvc/hero-2.jpg"
        flexContainerStyle={{ overflow: "hidden" }}
        backgroundImageStyle={{
          backgroundColor: "#363330",
          backgroundBlendMode: "overlay",
        }}
        backgroundFilterStyle={{ backdropFilter: "grayscale(40%) blur(1px)" }}
        backgroundColorStyle={{
          opacity: "1",
          backgroundColor: "transparent",
          backgroundImage: "linear-gradient(to top, #363330fa 50%, #36333088)",
        }}
      >
        <YlFlexContainer
          overflow="hidden"
          blockSize="100%"
          inlineSize="100%"
          gap="40px"
          mediaQuery={{ "360-1024": { flexDirection: "column" } }}
        >
          <YlFlexContainer
            inlineSize="560px"
            blockSize="100%"
            gap="40px"
            paddingBlockStart="180px"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            mediaQuery={{ "360-1024": { inlineSize: "300px" } }}
          >
            <YLTextHeader
              textTransform="uppercase"
              inlineSize="300px"
              fontSize="18px"
              fontFamily="Inter"
              fontWeight="600"
              color={EWhiteSwatch.white3}
              tag="h2"
            >
              <YLText tag="span" color="#7bbc4f" textDecoration="underline">
                Durability
              </YLText>{" "}
              and{" "}
              <YLText tag="span" color="#7bbc4f" textDecoration="underline">
                Style
              </YLText>
              <br />
              <YLText
                fontSize="12px"
                color="#91938d"
                tag="span"
                textTransform="capitalize"
              >
                for Your Home&apos;s Security
              </YLText>
            </YLTextHeader>
            <YLTextHeader
              textTransform="uppercase"
              fontFamily="Inter"
              fontWeight="800"
              fontSize="36px"
              color={EWhiteSwatch.white3}
              textShadow="0px 3px 6px #00000055"
            >
              Protection and Elegance:{" "}
              <YLText tag="span" color="#e0b08e">
                Impact Windows{" "}
              </YLText>
              and{" "}
              <YLText tag="span" color="#e0b08e">
                Doors{" "}
              </YLText>
              for Your Home
            </YLTextHeader>
            <YlButton
              rightIcon="/search-icon.svg"
              label="Get A Quote"
              size={EYLButtonSize.Large}
              theme={{ defaultColor: "#48752b" }}
            ></YlButton>
            <YlFlexContainer
              position="absolute"
              bottom="40px"
              paddingBlockStart="12px"
              gap="6px"
              transform="rotateZ(-90deg)"
              transformOrigin="left center"
            >
              <YlContainer
                inlineSize="4px"
                blockSize="4px"
                backgroundColor="#ffffff44"
                borderRadius="100%"
                boxShadow="0px 3px 6px #00000033"
              ></YlContainer>
              <YlContainer
                inlineSize="4px"
                blockSize="4px"
                backgroundColor="#ffffff88"
                borderRadius="100%"
                boxShadow="0px 3px 6px #00000033"
              ></YlContainer>
              <YlContainer
                inlineSize="4px"
                blockSize="4px"
                backgroundColor="#ffffffee"
                borderRadius="100%"
                boxShadow="0px 3px 6px #00000033"
              ></YlContainer>
              <YLText
                fontSize="10px"
                fontWeight="900"
                textTransform="uppercase"
                color="#ccc"
              >
                great quality
              </YLText>
            </YlFlexContainer>
          </YlFlexContainer>

          <YlFlexContainer
            className="Container"
            justifyContent="center"
            alignItems="center"
            blockSize="100%"
            inlineSize="400px"
            // transform="scale(0.5) translateX(-200px) translateY(-200px)"
          >
            <YLTransformCarrousel
              inlineSize="50%"
              blockSize="50%"
              infinite
              // autoplay
              controls
              options={{ rotationX: 20 }}
              items={[
                <YLDecoratorImage
                  key={0}
                  position="absolute"
                  inlineSize="300px"
                  blockSize="300px"
                  filter="brightness(120%)"
                  backgroundImage={`url("${"/mvc/windows-2.png"}")`}
                ></YLDecoratorImage>,
                <YLDecoratorImage
                  key={1}
                  position="absolute"
                  inlineSize="360px"
                  blockSize="360px"
                  filter="brightness(120%)"
                  backgroundImage={`url("${"/mvc/windows-1.png"}")`}
                ></YLDecoratorImage>,
                <YLDecoratorImage
                  key={2}
                  position="absolute"
                  inlineSize="440px"
                  blockSize="440px"
                  filter="brightness(120%)"
                  backgroundImage={`url("${"/mvc/door-1.png"}")`}
                ></YLDecoratorImage>,
              ]}
            ></YLTransformCarrousel>
          </YlFlexContainer>
        </YlFlexContainer>
      </YLBackgroundContainer>
      <YlContainer blockSize="400px" inlineSize="100%"></YlContainer>
    </>
  );
}
