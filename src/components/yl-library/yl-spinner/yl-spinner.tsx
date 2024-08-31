import { CSSProperties } from "react";
import "./base.css";
import { EYLSpinnerSize, IYLSpinnerProps, IYLSpinnerStyle } from "./types";

export default function YLSpinner({
  size = EYLSpinnerSize.M,
}: IYLSpinnerProps) {
  const ylSpinnerStyle: IYLSpinnerStyle = {
    "yl-spinner-size": size,
  };

  return (
    <span className="yl-spinner" style={ylSpinnerStyle as CSSProperties}></span>
  );
}
