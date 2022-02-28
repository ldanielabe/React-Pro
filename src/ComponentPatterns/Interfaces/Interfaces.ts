import { ReactElement } from "react";

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string,
}

export interface PropsStyle {
  className?: string,
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
  ({ children, product, className }: Props): JSX.Element,
  Title: ({className}:{className?:string}) => JSX.Element,
  Image: ({className}:{className?:string}) => JSX.Element,
  Buttons: ({className}:{className?:string}) => JSX.Element,
}


