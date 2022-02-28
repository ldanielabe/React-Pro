import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../Styles/styles.module.css'
import { PropsStyle } from '../Interfaces/Interfaces';


export const ProductButtons = ({className}:PropsStyle)=>{

    const {increaseBy, counter} = useContext(ProductContext);
  
    return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={`${styles.buttonMinus}`} onClick={()=>increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
    </div>
    );
}