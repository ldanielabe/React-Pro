import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../Styles/styles.module.css'
import { PropStyle } from '../Interfaces/Interfaces';


export const ProductButtons = ({className, style}:PropStyle)=>{

    const {increaseBy, counter, maxCount} = useContext(ProductContext);
    // isMaxReached = useCallback, [count, maxCount]  --> if count==maxCount true, false

    const isMaxReached = useCallback(() => !!maxCount && counter===maxCount,
    [counter, maxCount]);
    

    return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={`${styles.buttonMinus}`} onClick={()=>increaseBy(-1)}>-</button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`} onClick={()=>increaseBy(1)}>+</button>
    </div>
    );
}