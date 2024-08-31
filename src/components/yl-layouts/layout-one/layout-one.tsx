"use client";

import {
  type IYLDecoratorImageProps,
  YLDecoratorImage,
} from "../yl-decorator-image/yl-decorator-image";
import "./base.css";
import YLTextHeader, {
  EYLTextHeaderTag,
} from "../yl-text-header/yl-text-header";
import { YLBackgroundImage } from "../yl-background-image/yl-background-image";
import YLList from "../yl-list/yl-list";
import YLInput from "@/components/yl-library/yl-input/yl-input";
import YlButton from "@/components/yl-library/yl-button";
import YLIcon from "@/components/yl-library/yl-icon";
import YLSearchBar from "@/components/yl-library/yl-search-bar/yl-search-bar";
import { useState } from "react";
import YLStartRate from "@/components/yl-library/yl-start-rate/yl-start-rate";
import YLCalendar from "@/components/yl-library/yl-calendar/yl-calendar";

export default function YLLayoutOne({
  backgroundImage,
  decoratorImage,
}: {
  backgroundImage: BackgroundImageStyle;
  decoratorImage: DecoratorImage;
}) {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="yl-layout-one ">
      <div className="yl-container left">
        <div className="yl-content">
          <YLTextHeader
            type={EYLTextHeaderTag.h1}
            inlineSize="86%"
            fontSize="52px"
            fontWeight="900"
            fontFamily="Nunito"
            lineHeight="64px"
          >
            Disfruta de Cuba junto a nosotros.
          </YLTextHeader>
          <div className="Calendar">
            <YLCalendar />
          </div>
          <div className="Form">
            <div className="SearchBar">
              <YLSearchBar
                value={searchValue}
                onChange={(value) => setSearchValue(value)}
                dataset={dataList}
                filtered={(data) =>
                  data.hotels.filter((hotel) => hotel.name.match(searchValue))
                    .length > 0
                }
                datasetBuilder={(item) => (
                  <div key={item.zone}>
                    <span>{item.zone}</span>
                    <div className="List">
                      {item.hotels.map((info) => (
                        <div className="ItemSearch" key={info.name}>
                          <YLDecoratorImage
                            url="/item-1.jpg"
                            inlineSize="120px"
                            blockSize="100%"
                            position="relative"
                            backgroundSize="cover"
                          />
                          <div>
                            <span>{info.name}</span>
                            <YLStartRate value={info.range} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                placeholder="...Buscar Hoteles"
              />
            </div>
          </div>

          <div className="List">
            <YLTextHeader
              type={EYLTextHeaderTag.h4}
              fontSize="24px"
              fontWeight="900"
              fontFamily="Nunito"
              lineHeight="36px"
            >
              Destinos mas populares
            </YLTextHeader>

            <YLList
              data={[
                { url: "/item-1.jpg", title: "Matanzas", subTitle: "Varadero" },
                {
                  url: "/item-1.jpg",
                  title: "Matanzas1",
                  subTitle: "Varadero",
                },
                {
                  url: "/item-1.jpg",
                  title: "Matanzas2",
                  subTitle: "Varadero",
                },
              ]}
              listKey={"title"}
              itemClassName="items"
              builder={(item) => (
                <>
                  <YLDecoratorImage
                    url={item.url}
                    inlineSize="100%"
                    blockSize="100%"
                    backgroundSize="cover"
                    zIndex={0}
                  />
                  <div className="Content">
                    <YLTextHeader
                      className="Title"
                      type={EYLTextHeaderTag.h5}
                      fontSize="20px"
                      fontWeight="600"
                      color="white"
                    >
                      {item.title}
                    </YLTextHeader>
                    <YLTextHeader
                      className="Title"
                      type={EYLTextHeaderTag.h6}
                      fontSize="16px"
                      fontWeight="600"
                      color="white"
                    >
                      {item.subTitle}
                    </YLTextHeader>
                  </div>
                </>
              )}
            />
          </div>
        </div>
        <YLDecoratorImage
          className="yl-decorated-delimiter"
          url="/decorator-delimitator.png"
          inlineSize={"80%"}
          blockSize={"100%"}
          right="-60%"
          top="0px"
          backgroundSize="70%"
        />
      </div>
      <div className="yl-container right">
        <YLBackgroundImage
          url={backgroundImage.url}
          inlineSize="100%"
          blockSize="100%"
          backgroundPosition={backgroundImage.position}
          backgroundSize="100%"
        />
      </div>

      <YLDecoratorImage
        className="yl-decorated-image"
        url={decoratorImage.url}
        inlineSize={decoratorImage.inlineSize || "30%"}
        blockSize={decoratorImage.blockSize || "100%"}
        backgroundSize={"100%"}
        backgroundPosition={["center", "200px"]}
        bottom="0px"
        right="200px"
      />
    </section>
  );
}

interface BackgroundImageStyle extends ImageStyle {}

interface DecoratorImage
  extends Omit<IYLDecoratorImageProps, "inlineSize" | "blockSize"> {
  inlineSize?: string;
  blockSize?: string;
}

interface ImageStyle {
  url: string;
  position?: [string, string];
  size?: string;
}
const dataList = [
  {
    zone: "Varadero",
    hotels: [
      { range: 4, name: "hotels 1" },
      { range: 3.5, name: "hola 2" },
      { range: 5, name: "hola 3" },
    ],
  },
  {
    zone: "Matanzas",
    hotels: [
      { range: 4, name: "hotels 2" },
      { range: 3.5, name: "hotels 3" },
      { range: 5, name: "hotels 4" },
    ],
  },
];
