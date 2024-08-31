import { ReactNode } from "react";
import { IClassName } from "../../yl-utils/yl-global-interfaces";
import "./base.css";
export default function YLList<T>({
  data,
  className,
  itemClassName,
  listKey,
  direction = EYLListDirection.row,
  gap = "12px",

  builder,
}: IYLListProps<T>) {
  let listStyle: IYLListStyle = {
    "--yl-list-flex-direction": direction,
    "--yl-list-gap": gap,
  };

  return (
    <ul
      className={`yl-list ${className || ""}`}
      style={listStyle as React.CSSProperties}
    >
      {data.map((item: T, index) => {
        return (
          <li
            key={listKey ? (item[listKey] as string) : index}
            className={`yl-item ${itemClassName || ""}`}
          >
            {builder(item)}
          </li>
        );
      })}
    </ul>
  );
}

interface IYLListProps<T> extends IClassName {
  data: T[];
  itemClassName?: string;
  direction?: EYLListDirection;
  gap?: string;

  listKey?: keyof T;

  builder: (item: T) => ReactNode;
}

interface IYLListStyle {
  "--yl-list-flex-direction"?: string;
  "--yl-list-gap"?: string;
}

export enum EYLListDirection {
  column = "column",
  row = "row",
}
