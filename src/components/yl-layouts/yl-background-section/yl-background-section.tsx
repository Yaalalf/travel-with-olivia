"use client";
import { YLBackgroundColor } from "../yl-background-color/yl-background-color";
import { YLBackgroundImage } from "../yl-background-image/yl-background-image";
import "./base.css";
import YLTextHeader from "../yl-text-header/yl-text-header";
import YLSearchBar from "@/components/yl-library/yl-search-bar/yl-search-bar";
import {
  EYLTextHeaderTextAlign,
  EYLTextHeaderTransform,
} from "../yl-text-header/types";
import { YLBackdropFilter } from "../yl-backdrop-filter/yl-backdrop-filter";
import YLSearch from "@/components/yl-library/yl-search/yl-search";
import { useState } from "react";
import { EYLMediaQueryBreakPoints } from "@/components/yl-utils/yl-global-enums";
import YLFlexContainer from "../../yl-old-files-for-test/yl-flex-container-old/yl-flex-container";
import YLContainer from "../yl-container/yl-container";
import { ETag } from "@/components/yl-utils/yl-global-interfaces";
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
export default function YLBackgroundSection() {
  const [search, setSearch] = useState("");

  return (
    <YLContainer
      blockSize="720px"
      mediaQuery={{ "360-1024": { blockSize: "400px" } }}
      tag={ETag.section}
    >
      <YLBackgroundImage />
      <YLBackdropFilter backdropFilter="blur(2px)" />
      <YLBackgroundColor opacity="0.3" backgroundColor="#000" />

      <YLFlexContainer
        blockSize="100%"
        inlineSize="100%"
        flexDirection="column"
        gap="12px"
        mediaQuery={{
          [EYLMediaQueryBreakPoints.mobileFull]: { gap: "4px" },
        }}
      >
        <YLTextHeader
          tag={ETag.h2}
          fontSize="28px"
          textTransform={EYLTextHeaderTransform.uppercase}
          fontFamily="Nunito"
          fontWeight="400"
          color="white"
          textShadow="0px 3px 6px #00000050"
          textAlign={EYLTextHeaderTextAlign.center}
          mediaQuery={{
            [EYLMediaQueryBreakPoints.mobileFull]: {
              inlineSize: "80%",
              fontSize: "18px",
            },
          }}
        ></YLTextHeader>
        <YLTextHeader
          inlineSize="900px"
          tag={ETag.h1}
          fontSize="52px"
          textTransform={EYLTextHeaderTransform.uppercase}
          fontFamily="Nunito"
          fontWeight="700"
          color="white"
          textShadow="0px 3px 6px #00000050"
          textAlign={EYLTextHeaderTextAlign.center}
          mediaQuery={{
            [EYLMediaQueryBreakPoints.mobileFull]: {
              inlineSize: "80%",
              fontSize: "32px",
            },
          }}
        ></YLTextHeader>
      </YLFlexContainer>
      {/* <YLSearch
          value={search}
          onChange={(value) => {
            console.log(value);
            setSearch(value);
          }}
          dataset={data}
          field={"name"}
          onSearch={(result) => {
            result.forEach((item) => {
              console.log(item);
            });
          }}
        /> */}
    </YLContainer>
  );
}
