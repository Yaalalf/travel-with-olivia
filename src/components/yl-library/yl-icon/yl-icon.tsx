import "./base.css";
import { YLIconProps } from "./types";

export default function YLIcon({ icon, color, className }: YLIconProps) {
  return (
    <span className={`yl-icon ${className || ""}`}>
      <span
        className="yl-icon-container"
        style={{ maskImage: `url(${icon})` }}
      ></span>
    </span>
  );
}
