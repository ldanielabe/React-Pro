import { ProductCard } from "../Components";
import "../Styles/custom-style.css";

const product = {
  id: '1',
  name: 'Coffe Mug',
  img: './coffee-mug.png'
}


export const ShopingPage = () => {

  return (
  <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <ProductCard product={product} className="bg-dark">
          <>
            <ProductCard.Image className="custom-image" />

            <ProductCard.Title className="text-white"/>

            <ProductCard.Buttons className="custom-buttons" />
          </>
        </ProductCard>
      </div>
  </div>);
};

export default ShopingPage;
