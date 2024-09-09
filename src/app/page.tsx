"use client";

import {
  IYLContainerStyleProps,
  YLContainerStyle,
} from "@/components/yl-layouts/yl-container/types";
import YlContainer from "@/components/yl-layouts/yl-container/yl-container";
import YlFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLStyleStateDelivery from "@/components/yl-layouts/yl-style-state-delivery/yl-style-state-delivery";
import BestOffersSection from "@/sections/BestOffersSection/BestOffersSection";
import HeaderSection from "@/sections/HeaderSection/HeaderSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import SpecialOfferSection from "@/sections/SpecialOfferSection/SpecialOfferSection";
import WyChooseSection from "@/sections/WyChooseUsSection/WyChooseSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [parentHover, setParentHover] = useState("default");

  return (
    <main>
      {/* <YlHeader
        desktop={
          <>
            <YLDecoratorImage
              inlineSize="120px"
              blockSize="80px"
              url="/logo.png"
            />
          </>
        }
        mobile={<></>}
      /> */}
      {/* <HeaderSection></HeaderSection> */}
      <HeroSection></HeroSection>
      {/* <SpecialOfferSection></SpecialOfferSection> */}
      {/* <BestOffersSection></BestOffersSection> */}
      {/* <WyChooseSection></WyChooseSection> */}
      <YlFlexContainer
        dataParentHover
        inlineSize="100%"
        blockSize="400px"
        backgroundColor="red"
      >
        <YlContainer
          inlineSize="200px"
          blockSize="200px"
          backgroundColor="blue"
          transition="all ease-in-out 1000ms"
          hoverStyle={{ backgroundColor: "white" }}
          parentHoverStyle={{ backgroundColor: "green", scale: "1.5" }}
        ></YlContainer>
      </YlFlexContainer>
      <YlFlexContainer
        paddingBlock="200px"
        onClick={() => {
          if (parentHover == "default") {
            setParentHover("parentHover");
          } else {
            setParentHover("default");
          }
        }}
      >
        <YLStyleStateDelivery
          currentState={parentHover}
          states={["parentHover"]}
          delivery={(state) => {
            switch (state) {
              case "parentHover":
                return {
                  inlineSize: "160px",
                  blockSize: "160px",
                  backgroundColor: "blue",
                  transition: "all ease-in-out 1000ms",
                  mediaQuery: { "360-1024": { inlineSize: "200px" } },
                };

              default:
                return {
                  inlineSize: "220px",
                  blockSize: "220px",
                  backgroundColor: "red",

                  transition: "all ease-in-out 1000ms",
                };
            }
          }}
        >
          {(styles: IYLContainerStyleProps) => {
            return (
              <YlContainer className="MyComponent" {...styles}></YlContainer>
            );
          }}
        </YLStyleStateDelivery>
      </YlFlexContainer>
    </main>
  );
}
