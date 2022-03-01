import { createContext, useContext } from 'react';
import { ProductTitle, ProductButtons, ProductImage } from '.';
import { useProduct } from '../Hooks/useProduct';
import { ProductContextProps, Props } from '../Interfaces/Interfaces'

import styles from '../Styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style}: Props) => {

  const {counter,increaseBy} = useProduct();

  return (
  <Provider value={{
    product,
    counter,
    increaseBy
  }}>
    <div className={`${styles.productCard} ${className}`} style={style}>
      
        {children}
        
    </div>
  </Provider>);
};

