import "./base.css";
import { YLIconProps } from "./types";

export default function YLIcon({ name, url, color, className }: YLIconProps) {
  return (
    <span className={`yl-icon ${className || ""}`}>
      <span
        className="yl-icon-container"
        style={{ maskImage: `url(${icon})` }}
      ></span>
    </span>
  );
}
