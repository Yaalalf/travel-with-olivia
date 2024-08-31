"use client";

import {
  IClassName,
  IStateInput,
} from "@/components/yl-utils/yl-global-interfaces";
import YLIcon from "../yl-icon";
import YLInput from "../yl-input/yl-input";

import "./base.css";
import YLMenu from "../yl-menu";
import { ReactNode, useRef, useState } from "react";
import YLList, {
  EYLListDirection,
} from "@/components/yl-layouts/yl-list/yl-list";
import YlButton, { EYLButtonStyle } from "../yl-button";
import { EYLButtonSize } from "../yl-button/types";

export default function YLSearchBar<T>(props: IYLSearchBarProps<T>) {
  const [isSearchMenu, setIsSearchMenu] = useState(false);
  const searchBarRef = useRef(null);
  return (
    <div
      ref={searchBarRef}
      className="yl-search-bar"
      onClick={() => {
        setIsSearchMenu(true);
      }}
    >
      <YLInput
        {...props}
        className={`yl-search-input ${props.className || ""}`}
        inputContainerClassName="yl-search-input-container"
        prefixSlot={
          <YLIcon className="yl-search-icon" icon="/search-icon.svg"></YLIcon>
        }
        postfixSlot={
          <YlButton
            className="yl-search-bar-button"
            style={EYLButtonStyle.Filled}
            size={EYLButtonSize.Medium}
            label="Buscar"
          />
        }
        beforeSlot={
          <YLMenu className="yl-search-menu Menu" parentElement={searchBarRef}>
            <YLList
              data={props.dataset.filter(props.filtered)}
              builder={
                props.datasetBuilder
                  ? props.datasetBuilder
                  : (item) => <>{item}</>
              }
              direction={EYLListDirection.column}
            />
          </YLMenu>
        }
      />
    </div>
  );
}

interface IYLSearchBarProps<T>
  extends Partial<IStateInput<string>>,
    IClassName {
  dataset: T[];
  filtered: (data: T) => boolean;
  datasetBuilder?: (item: T) => ReactNode;
  placeholder?: string;
}
