import { ReactElement, CSSProperties } from 'react';

export interface Props {
  product: Product,
  // children?: ReactElement | ReactElement[],
  children: (args: productCardHandlers)=> JSX.Element,
  className?: string,
  style?: CSSProperties,
  onChange?: (args: onChangeArgs)=> void,
  value?: number,
  initialValues?: InitialValues,
}

export interface InitialValues{
  count?:number,
  maxCount?:number,
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
  counter: number,
  product: Product,
  maxCount?: number,
  increaseBy: (value:number) => void,  
}

export interface ProductHOC {
  ({ product, children, className, style, onChange, value, initialValues }: Props): JSX.Element,
  Title: ({className}:PropStyle) => JSX.Element,
  Image: ({className}:PropStyle) => JSX.Element,
  Buttons: ({className}:PropStyle) => JSX.Element,
}


export interface useProductArgs{
  product:Product,
  onChange?: (args:onChangeArgs)=> void,
  value?:number,
  initialValues?: InitialValues
}

export interface productCardHandlers{
  count: number,
  isMaxCountReached: boolean,
  maxCount?:number,
  product: Product,

  increaseBy: (value: number) => void,
  reset: () => void,
}