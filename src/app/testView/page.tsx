import YlButton from "@/components/yl-library/yl-button";

import "./base.css";
import { EYLButtonStyle } from "@/components/yl-library/yl-button";
import { EYLButtonSize } from "@/components/yl-library/yl-button/types";
import Link from "next/link";

export default function testView() {
  return (
    <main className="yl-theme-basic Main">
      <Link href={"testView/buttons"}>buttons</Link>
      <Link href={"testView/inputs"}>inputs</Link>
    </main>
  );
}
