import { IClassName } from "@/components/yl-utils/yl-global-interfaces";

export const YL_ICON_NAME = "--yl-icon";

export type YLIconName = "--yl-icon";

export interface YLIconProps extends IClassName {
  name: YLIcons;
  url: string;
  color?: string;
}

export type YLIcons = "";
