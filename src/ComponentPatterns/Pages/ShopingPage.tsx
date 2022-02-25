import { ProductCard } from "../Components";

const product = {
  id: '1',
  name: 'Coffe Mug',
  img: './coffee-mug.png'
}


export const ShopingPage = () => {

  return (
  <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <ProductCard product={product}>
          <>
            <ProductCard.Image />

            <ProductCard.Title />

            <ProductCard.Buttons />
          </>
        </ProductCard>
      </div>
  </div>);
};

export default ShopingPage;
