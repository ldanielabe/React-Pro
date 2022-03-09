import { createContext } from 'react';
import { useProduct } from '../Hooks/useProduct';
import { ProductContextProps, Props, InitialValues } from '../Interfaces/Interfaces';

import styles from '../Styles/styles.module.css'


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {

  const {counter,increaseBy} = useProduct({product,onChange, value, initialValues});

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

