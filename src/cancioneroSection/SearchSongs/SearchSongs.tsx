import { YLBackdropFilter } from "@/components/yl-layouts/yl-backdrop-filter/yl-backdrop-filter";
import { YLBackgroundColor } from "@/components/yl-layouts/yl-background-color/yl-background-color";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { EYLTextHeaderTextAlign } from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";
import { Fragment } from "react";

export default function SearchSongs() {
  return (
    <section className="SearchSongs">
      <YLContainer inlineSize="100%" blockSize="360px">
        <YLBackgroundImage
          backgroundImage={`url("/cancionero/Piano.jpeg")`}
          backgroundSize="cover"
        />
        <YLBackgroundColor opacity="0.4" backgroundColor="black" />
        <YLBackdropFilter backdropFilter="blur(2px)" />
        <YLFlexContainer flexDirection="column">
          <YLTextHeader
            tag={ETag.h1}
            fontSize="40px"
            fontFamily="Nunito"
            fontWeight="900"
            color="white"
          >
            Cancionero
          </YLTextHeader>
          <YLTextHeader
            tag={ETag.h2}
            fontSize="24px"
            fontFamily="Nunito"
            fontWeight="600"
            textAlign={EYLTextHeaderTextAlign.center}
            color="white"
            textShadow="0px 3px 6px #00000053"
          >
            Grupo: Altar de Adoracion
          </YLTextHeader>
          <YLContainer
            inlineSize="120px"
            blockSize="120px"
            borderRadius="12px"
            marginBlockStart="12px"
            boxShadow="0px 3px 6px black"
          >
            <YLBackgroundImage
              backgroundImage={`url("/cancionero/Logo.jpeg")`}
              backgroundSize="cover"
            />
          </YLContainer>
        </YLFlexContainer>
      </YLContainer>
      <YLFlexContainer
        flexDirection="column"
        inlineSize="100%"
        paddingBlock="60px"
        gap="12px"
      >
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((song) => (
            <Fragment key={song.name}>
              <YLFlexContainer
                inlineSize="300px"
                blockSize="80px"
                borderRadius="12px"
                backgroundColor="#fff"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                padding="12px"
                boxShadow="0px 3px 3px #00000033"
              >
                <YLTextHeader
                  tag={ETag.h3}
                  fontSize="16px"
                  fontWeight="800"
                  fontFamily="Nunito"
                >
                  {song.name}
                </YLTextHeader>
                <YLText
                  tag={ETag.span}
                  fontSize="16px"
                  fontWeight="400"
                  fontFamily="Nunito"
                  color="#555"
                >
                  {song.type}
                </YLText>
              </YLFlexContainer>
            </Fragment>
          ))}
      </YLFlexContainer>
    </section>
  );
}

const data = [
  { name: "Alaba", type: "alabanza" },
  { name: "Hay libertad en la casa de Dios", type: "alabanza" },
  { name: "Movimiento de gloria", type: "alabanza" },
  { name: "Quita la tristeza de tu corazón", type: "alabanza" },
  { name: "Danzando en cada temporada", type: "alabanza" },
  { name: "Esta es la razón", type: "alabanza" },
  { name: "Ola de Avivamiento", type: "alabanza" },
  { name: "Jubileo", type: "alabanza" },
  { name: "Jubilo", type: "alabanza" },
  { name: "No  hay nadie como Jesús", type: "alabanza" },
  { name: "Freedom", type: "alabanza" },
  { name: "Gracia sublime es", type: "alabanza" },
  { name: "Jericó", type: "alabanza" },
  { name: "Celebrad a Cristo", type: "alabanza" },
  { name: "Eterno", type: "alabanza" },
  { name: "Tu hijo soy", type: "alabanza" },
  { name: "Que no pare la alabanza", type: "alabanza" },
  { name: "Todo cambió", type: "alabanza" },
  { name: "Bueno es", type: "alabanza" },
  { name: "Eres todo poderoso", type: "alabanza" },
  { name: "Tu pueblo dice gracia", type: "alabanza" },
  { name: "Te doy gloria", type: "alabanza" },
  { name: "Llena la tierra con tu gloria", type: "alabanza" },
  { name: "Bautizados en fuego", type: "alabanza" },
  { name: "Nadie", type: "alabanza" },
  { name: "Alábenle", type: "alabanza" },
  { name: "Los muros caerán", type: "alabanza" },
  { name: "Grande es el Señor", type: "alabanza" },
  { name: "Fuego ha bajado del cielo", type: "alabanza" },
];
