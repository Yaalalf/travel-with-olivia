"use client";
import { YLBackdropFilter } from "@/components/yl-layouts/yl-backdrop-filter/yl-backdrop-filter";
import { YLBackgroundColor } from "@/components/yl-layouts/yl-background-color/yl-background-color";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { EYLTextHeaderTextAlign } from "@/components/yl-layouts/yl-text-header/types";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLText from "@/components/yl-layouts/yl-text/yl-text";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";
import Link from "next/link";
import { useSongs } from "../context/songs-context";

export default function SearchSongs() {
  const songs = useSongs();

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
        {songs
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((song) => (
            <YLFlexContainer
              key={song.name}
              inlineSize="300px"
              blockSize="80px"
              borderRadius="12px"
              backgroundColor="#fff"
              boxShadow="0px 3px 3px #00000033"
            >
              <Link
                style={{ inlineSize: "100%", blockSize: "100%" }}
                href={`/cancionero/${song.name}`}
                key={song.name}
              >
                <YLFlexContainer
                  inlineSize="100%"
                  blockSize="100%"
                  padding="12px"
                  flexDirection="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
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
              </Link>
            </YLFlexContainer>
          ))}
      </YLFlexContainer>
    </section>
  );
}
