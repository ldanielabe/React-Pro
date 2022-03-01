import { ReactElement, CSSProperties } from 'react';

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: CSSProperties
}

export interface PropStyle {
  className?: string,
  style?: CSSProperties
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
  ({ product, children, className, style }: Props): JSX.Element,
  Title: ({className}:PropStyle) => JSX.Element,
  Image: ({className}:PropStyle) => JSX.Element,
  Buttons: ({className}:PropStyle) => JSX.Element,
}


