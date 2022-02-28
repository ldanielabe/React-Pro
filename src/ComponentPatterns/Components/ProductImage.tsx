import { useContext } from "react";
import noImage from '../assets/noimage.jpg'
import { PropsStyle } from "../Interfaces/Interfaces";
import styles from '../Styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductImage = ({className}:PropsStyle)=>{
  
    const { product } = useContext(ProductContext);
  
    let showToImage: string;
  
    product.img? showToImage=product.img : showToImage=noImage;
  
  return <img className={`${styles.productImg} ${className}`} src={showToImage} alt="Product" />
  }
