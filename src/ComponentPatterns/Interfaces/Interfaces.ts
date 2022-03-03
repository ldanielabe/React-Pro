import { ReactElement, CSSProperties } from 'react';

export interface Props {
  product: Product,
  children?: ReactElement | ReactElement[],
  className?: string,
  style?: CSSProperties,
  onChange?: (args: onChangeArgs)=> void,
  value?: number,
}

export interface onChangeArgs{
  product:Product, 
  count:number
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
  ({ product, children, className, style, onChange, value }: Props): JSX.Element,
  Title: ({className}:PropStyle) => JSX.Element,
  Image: ({className}:PropStyle) => JSX.Element,
  Buttons: ({className}:PropStyle) => JSX.Element,
}


export interface useProductArgs{
  product:Product,
  onChange?: (args:onChangeArgs)=> void,
  value?:number,
}

