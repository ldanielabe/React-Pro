import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../Styles/styles.module.css';
import { PropStyle } from '../Interfaces/Interfaces';


export const ProductTitle = ({className, style}:PropStyle)=>{

    const {product} = useContext(ProductContext);
  
  return <span className={`${styles.productDescription} ${className}`} style={style}>{product.name} </span>
}

