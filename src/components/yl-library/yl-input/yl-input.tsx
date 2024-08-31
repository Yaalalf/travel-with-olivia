"use client";

import "./base.css";
import { IYLInputProps } from "./types";

export default function YLInput({
  value,
  onChange,
  placeholder = "",
  className,
  inputContainerClassName,
  style = "none",
  label,
  labelSlot,
  postfixSlot,
  prefixSlot,
  afterSlot,
  beforeSlot,
}: IYLInputProps) {
  return (
    <label className={`yl-input yl-input-${style} ${className || ""}`}>
      {labelSlot && <span className="yl-input-label">{labelSlot}</span>}
      <div className={`yl-input-container ${inputContainerClassName || ""}`}>
        {beforeSlot && <div className="yl-input-before">{beforeSlot}</div>}

        <div className="yl-input-content">
          {prefixSlot && <span className="yl-input-prefix">{prefixSlot}</span>}
          <div className="yl-input-body">
            <div className="yl-input-label">{label}</div>
            <input
              value={value}
              placeholder={placeholder}
              onChange={(evt) => {
                onChange && onChange(evt.target.value);
              }}
              className="yl-input-native"
              type="text"
            />
          </div>

          {postfixSlot && (
            <span className="yl-input-postfix">{postfixSlot}</span>
          )}
        </div>
        {afterSlot && <div className="yl-input-after">{afterSlot}</div>}
      </div>
    </label>
  );
}
