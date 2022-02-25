import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../Styles/styles.module.css';


export const ProductTitle = ()=>{

    const {product} = useContext(ProductContext);
  
  return <span className={styles.productDescription}>{product.name} </span>
}

