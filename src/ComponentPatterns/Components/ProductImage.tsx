import { useContext } from "react";
import noImage from '../assets/noimage.jpg'
import styles from '../Styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductImage = ()=>{
  
    const { product } = useContext(ProductContext);
  
    let showToImage: string;
  
    product.img? showToImage=product.img : showToImage=noImage;
  
  return <img className={styles.productImg} src={showToImage} alt="Product" />
  }
