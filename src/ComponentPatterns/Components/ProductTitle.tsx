import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../Styles/styles.module.css';
import { PropsStyle } from '../Interfaces/Interfaces';


export const ProductTitle = ({className}:PropsStyle)=>{

    const {product} = useContext(ProductContext);
  
  return <span className={`${styles.productDescription} ${className}`}>{product.name} </span>
}

