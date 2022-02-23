import { useProduct } from '../Hooks/useProduct';
import styles from '../Styles/styles.module.css'
// import noImage from '../Assets/noImage.jpg'

export const ProductCard = () => {

  const {counter,increaseBy} = useProduct();

  return (
  <div className={styles.productCard}>
     
    <img className={styles.productImg} src="./coffee-mug.png" alt="Coffe Mug" />
      {/* <img className={styles.ProductImg} src={noImage} alt="No image" /> */}

      <span className={styles.productDescription}>Coffe Mug</span>
      
      <div className={styles.buttonsContainer}>

          <button className={styles.buttonMinus} onClick={()=>increaseBy(-1)}>-</button>
          
          <div className={styles.countLabel}>{counter}</div>
          
          <button className={styles.buttonAdd} onClick={()=>increaseBy(1)}>+</button>
      
      </div>
  </div>);
};
