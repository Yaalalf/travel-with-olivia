import { ISVGStyleProps } from "../yl-utils/yl-global-interfaces";

export default function ArrowForwardIcon({
  fill = "black",
  size = "24px",
}: ISVGStyleProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={fill}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />{" "}
    </svg>
  );
}
