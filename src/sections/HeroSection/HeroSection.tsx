"use client";

import YLBackgroundTitleContentSection from "@/components/yl-web-landing-page/yl-sections/yl-background-title-content-section/yl-background-title-content-section";
import { EBlueSwath } from "@/components/yl-utils/yl-global-enums";
import YLBackgroundCarrousel from "@/components/yl-layouts/yl-background-carrousel/yl-background-carrousel";
import YLBackgroundCarrouselContainer from "@/components/yl-web-landing-page/yl-background-carrousel-container/yl-background-carrousel-container";
import YLBackgroundCarrouselTitleContentSection from "@/components/yl-web-landing-page/yl-sections/yl-background-carrousel-title-content-section/yl-background-carrousel-title-content-section";
import YLSearch from "@/components/yl-library/yl-search/yl-search";

import "./base.css";
import YlFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import YlContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLList from "@/components/yl-layouts/yl-list/yl-list";
import YLCheap from "@/components/yl-web-landing-page/yl-cheap/yl-cheap";
import { useState } from "react";

const data = [
  { name: "melia internacional" },
  { name: "iberostar bella costa" },
  { name: "iberostar selection varadero" },
  { name: "iberostar bella vista" },
  { name: "melia varadero" },
  { name: "melia penninsula" },
  { name: "playa vista azul" },
  { name: "selectum family resort" },
  { name: "grand aston varadero" },
];
export default function HeroSection() {
  const [selected, SetSelected] = useState(0);
  const placeholders = [
    "Busca entre todos nuestros Hoteles",
    "Busca Hoteles en Varadero",
    "Busca Hoteles en Cayo Coco",
    "Busca Hoteles en La Habana",
    "Busca Hoteles en Cayo Santa Maria",
  ];
  return (
    <>
      <YLBackgroundCarrouselTitleContentSection
        className="yl-theme-basic"
        imgUrls={[
          "/background.jpg",
          "/background-hero.jpg",
          "/background-1.jpg",
        ]}
        blockSize="600px"
        textAlign="center"
        textTransform="uppercase"
        primaryText="Un viaje Diferente"
        secondaryText="Encuentra los Mejores Hoteles en Cuba"
        contentText="Ofrecemos una amplia selección de hoteles en los mejores destinos de la isla, desde La Habana hasta Varadero!. Con nuestra agencia de viajes, reservar tu hotel es más fácil que nunca."
        textContentContainerInlineSize="480px"
        containerTitleStyle={{
          inlineSize: "800px",
          mediaQuery: {
            "360-1024": { inlineSize: "90%", paddingInline: "20px" },
          },
        }}
        titleContentContainerStyle={{ inlineSize: "800px" }}
        backgroundColorStyle={{
          backgroundColor: EBlueSwath.blue5,
          opacity: "0.8",
        }}
        backgroundContainerStyle={{ flexDirection: "column" }}
        containerStyle={{
          mediaQuery: {
            "360-1024": { blockSize: "800px" },
          },
        }}
      >
        <YLList
          gap="20px"
          marginBlockEnd="12px"
          data={[
            "Todos",
            "Varadero",
            "Cayo Coco",
            "La Habana",
            "Cayo Santa Maria",
          ]}
          builder={(item, index) => (
            <YLCheap
              cheapStyle={
                selected == index
                  ? { backgroundColor: "white" }
                  : { cursor: "pointer" }
              }
              cheapTextStyle={
                selected == index
                  ? { color: EBlueSwath.blue5, fontWeight: "600" }
                  : {}
              }
              onClick={() => {
                SetSelected(index as number);
              }}
            >
              {item}
            </YLCheap>
          )}
        ></YLList>

        <YLSearch
          className="search"
          placeholder={placeholders[selected]}
          dataset={data}
        ></YLSearch>
      </YLBackgroundCarrouselTitleContentSection>
    </>
  );
}
