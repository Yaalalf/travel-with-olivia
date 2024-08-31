import {
  IClassName,
  IStateInput,
} from "@/components/yl-utils/yl-global-interfaces";

export interface IYLSearchProps<T>
  extends Partial<IStateInput<string>>,
    IClassName {
  dataset: T[];
  field?: keyof T;
  filtered?: (data: T, searchValue: string) => boolean;
  onSearch?: (result: T[]) => void;

  placeholder?: string;
}
