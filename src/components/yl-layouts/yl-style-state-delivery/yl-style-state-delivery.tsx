import useStyleStateDelivery from "@/components/yl-hooks/use-style-state-delivery";
import {
  IStyleStateDelivery,
  StyleState,
} from "@/components/yl-utils/yl-global-interfaces";
import { ReactElement, useEffect } from "react";

export default function YLStyleStateDelivery<
  ComponentStyleProps,
  States extends string
>({
  currentState,
  states,
  delivery,
  children,
}: IYLStyleStateDeliveryProps<ComponentStyleProps, States>) {
  const cb = useStyleStateDelivery({ states, delivery });
  const defaultState = cb("default");
  return <>{children(cb(currentState))}</>;
}

export interface IYLStyleStateDeliveryProps<
  ComponentStyleProps,
  States extends string
> extends IStyleStateDelivery<States, ComponentStyleProps> {
  currentState: StyleState<States>;
  children: (
    componentStyle: ComponentStyleProps
  ) => ReactElement<ComponentStyleProps>;
}
