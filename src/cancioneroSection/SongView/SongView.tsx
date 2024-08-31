"use client";

import YLContainer from "@/components/yl-layouts/yl-container/yl-container";
import { ISong, IStanza } from "../context/songs-context";
import { YLBackgroundImage } from "@/components/yl-layouts/yl-background-image/yl-background-image";
import { YLBackgroundColor } from "@/components/yl-layouts/yl-background-color/yl-background-color";
import { YLBackdropFilter } from "@/components/yl-layouts/yl-backdrop-filter/yl-backdrop-filter";
import YLTextHeader from "@/components/yl-layouts/yl-text-header/yl-text-header";
import YLFlexContainer from "@/components/yl-layouts/yl-flex-container/yl-flex-container";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";
import { EYLTextHeaderTextAlign } from "@/components/yl-layouts/yl-text-header/types";
import { Fragment } from "react";
import YLText from "@/components/yl-layouts/yl-text/yl-text";

export default function SongView({ song }: { song: ISong }) {
  return (
    <section className="SongView">
      <YLContainer inlineSize="100%" blockSize="280px">
        <YLBackgroundImage
          backgroundImage={`url("/cancionero/Piano.jpeg")`}
          backgroundSize="cover"
        />
        <YLBackgroundColor opacity="0.4" backgroundColor="black" />
        <YLBackdropFilter backdropFilter="blur(2px)" />
        <YLFlexContainer flexDirection="column">
          <YLTextHeader
            paddingInline="16px"
            tag={ETag.h1}
            fontSize="40px"
            fontFamily="Nunito"
            fontWeight="900"
            textAlign={EYLTextHeaderTextAlign.center}
            color="white"
          >
            {song.name}
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
            ({song.type})
          </YLTextHeader>
        </YLFlexContainer>
      </YLContainer>

      <YLContainer paddingInlineStart="12px" paddingBlockStart="20px">
        {song.structure?.map((item, index) => (
          <Fragment key={`${item}-${index}`}>
            <YLTextHeader marginBlockEnd="16px" marginBlockStart="12px">
              {searchStanza(song, item).label}
            </YLTextHeader>
            {searchStanza(song, item).sentences.map((subItem, subIndex) => (
              <YLText key={`${item}-${index}-${subIndex}`}>{subItem}</YLText>
            ))}
          </Fragment>
        ))}
      </YLContainer>
    </section>
  );
}

function searchStanza(song: ISong, search: string) {
  let stanza: IStanza | undefined = undefined;
  if (song.letter) {
    Object.entries(song.letter).forEach((entry: [string, IStanza[]]) => {
      let currentStanza = entry[1].find((stanza) => stanza.id == search);
      if (currentStanza) {
        stanza = currentStanza;
      }
    });
  }

  return stanza as unknown as IStanza;
}
