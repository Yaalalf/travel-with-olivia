"use client";

import YLIcon from "../yl-icon";
import YLInput from "../yl-input/yl-input";

import "./base.css";

import YlButton, { EYLButtonStyle } from "../yl-button";
import { EYLButtonSize } from "../yl-button/types";
import { IYLSearchProps } from "./types";

export default function YLSearch<T>(props: IYLSearchProps<T>) {
  const filterMethod = (item: T) => {
    if (props.value != undefined) {
      if (props.field) {
        console.log(props.value);
        const result = String(item[props.field])
          .toLowerCase()
          .match(props.value);
        if (result) {
          return result.length > 0;
        } else {
          return false;
        }
      } else if (props.filtered) {
        const result = props.filtered(item, props.value);
        return result;
      }
    }
    return false;
  };

  return (
    <div className="yl-search">
      <YLInput
        {...props}
        className={`yl-search-input ${props.className || ""}`}
        inputContainerClassName="yl-search-input-container"
        prefixSlot={
          <YLIcon className="yl-search-icon" icon="/search-icon.svg"></YLIcon>
        }
        postfixSlot={
          <YlButton
            onClick={() => {
              props.onSearch &&
                props.onSearch(props.dataset.filter(filterMethod));
            }}
            className="yl-search-bar-button"
            style={EYLButtonStyle.Filled}
            size={EYLButtonSize.Medium}
            label="Buscar"
          />
        }
      />
    </div>
  );
}
