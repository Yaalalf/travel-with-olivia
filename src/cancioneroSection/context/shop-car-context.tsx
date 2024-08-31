import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { ProductItem } from "./product-context";

const ShopCarContext = createContext<ShopCar | null>(null);

const ShopCarDispatchContext = createContext<Dispatch<ShopCarActions> | null>(
  null
);

export function ShopCarProvider({ children }: { children: ReactNode }) {
  const [shopCar, dispatch] = useReducer(ShopCarReducer, {
    products: [],
  });

  useEffect(() => {
    let shopCar: ShopCar = { products: [] };

    if (
      JSON.parse(window.sessionStorage.getItem("shopCar") as string) != null
    ) {
      shopCar.products = JSON.parse(
        window.sessionStorage.getItem("shopCar") as string
      ).products;
    }

    dispatch({
      type: ShopCarActionsType.initShopCar,
      products: shopCar.products,
    });
  }, []);

  return (
    <ShopCarContext.Provider value={shopCar}>
      <ShopCarDispatchContext.Provider value={dispatch}>
        {children}
      </ShopCarDispatchContext.Provider>
    </ShopCarContext.Provider>
  );
}

export function useShopCar() {
  return useContext(ShopCarContext);
}

export function useShopCarDispatch() {
  return useContext(ShopCarDispatchContext);
}

function ShopCarReducer(state: ShopCar, action: ShopCarActions) {
  const newState: ShopCar = { products: [] };
  switch (action.type) {
    case ShopCarActionsType.initShopCar:
      newState.products = action.products;
      console.log("entre", action.products);
      return newState;

    case ShopCarActionsType.addProduct:
      newState.products = [...state.products, action.product];
      window.sessionStorage.setItem("shopCar", JSON.stringify(newState));

      return newState;

    case ShopCarActionsType.removeProduct:
      newState.products = [
        ...state.products.slice(0, action.index),
        ...state.products.slice(action.index + 1, state.products.length),
      ];
      window.sessionStorage.setItem("shopCar", JSON.stringify(newState));
      return newState;

    case ShopCarActionsType.changeQuantityProduct:
      const products = state.products;

      newState.products = [...state.products];
      newState.products[action.index].quantity = action.quantity;

      window.sessionStorage.setItem("shopCar", JSON.stringify(newState));
      return newState;
  }
}

export type ShopCarActions =
  | { type: ShopCarActionsType.initShopCar; products: ProductItem[] }
  | { type: ShopCarActionsType.addProduct; product: ProductItem }
  | { type: ShopCarActionsType.removeProduct; index: number }
  | {
      type: ShopCarActionsType.changeQuantityProduct;
      index: number;
      quantity: number;
    };

export enum ShopCarActionsType {
  initShopCar = "init",
  addProduct = "add",
  removeProduct = "remove",
  changeQuantityProduct = "changeQuantity",
}

export interface ShopCar {
  products: ProductItem[];
}
