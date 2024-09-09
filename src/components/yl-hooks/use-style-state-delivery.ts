import { useState } from "react";
import {
  IStyleStateDelivery,
  StyleState,
} from "../yl-utils/yl-global-interfaces";

export default function useStyleStateDelivery<
  States extends string,
  YLComponentStyleProps
>({
  states,
  delivery,
}: IStyleStateDelivery<States, YLComponentStyleProps>): (
  state: StyleState<States>
) => YLComponentStyleProps {
  const styleStates: StyleState<States>[] = ["default", ...states];

  return (state: StyleState<States>) => {
    if (styleStates.includes(state)) {
      return delivery(state);
    } else {
      return delivery("default");
    }
  };
}
