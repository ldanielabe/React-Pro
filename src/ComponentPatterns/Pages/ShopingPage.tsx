import { ProductCard } from "../Components/ProductCard";

export const ShopingPage = () => {
  return (
  <div>
      <h1>Shopping Store</h1>
      <hr />
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
  </div>);
};

export default ShopingPage;
