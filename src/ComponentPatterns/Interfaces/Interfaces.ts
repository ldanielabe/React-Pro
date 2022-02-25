import { ReactElement } from "react";

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
}

export interface Product {
    id: string,
    name: string,
    img?: string,
}

export interface ProductContextProps {
  product: Product,
  counter: number,
  increaseBy: (value:number) => void,
  
}

export interface ProductHOC {
  ({ children, product }: Props): JSX.Element,
  Title: () => JSX.Element,
  Image: () => JSX.Element,
  Buttons: () => JSX.Element,
}


