import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../Styles/styles.module.css'
import { PropStyle } from '../Interfaces/Interfaces';


export const ProductButtons = ({className, style}:PropStyle)=>{

    const {increaseBy, counter} = useContext(ProductContext);
  
    return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={`${styles.buttonMinus}`} onClick={()=>increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
    </div>
    );
}