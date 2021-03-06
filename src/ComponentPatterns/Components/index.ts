import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductHOC } from '../Interfaces/Interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export { MyTextInput } from './MyTextInput';
export { MyCheckBox } from './MyCheckBox';
export { MySelect } from './MySelect';


export const ProductCard:ProductHOC = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});
