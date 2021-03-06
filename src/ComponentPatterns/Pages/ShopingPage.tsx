import { useState } from "react";
import { ProductCard } from "../Components";
import { Product, onChangeArgs } from '../Interfaces/Interfaces';
import "../Styles/custom-style.css";

const product = {
  id: '1',
  name: 'Coffe Mug',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  name: 'Coffe Mug 2',
  img: './coffee-mug2.png'
}

const products:Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number
}

export const ShopingPage = () => {

  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCart}>({
    // '1': {...product, count:10}
  });

  const onProductChange= ({count, product}: onChangeArgs) =>{

    setShoppingCart((oldShoppingCart)=>{

      const productInCart:ProductInCart = oldShoppingCart[product.id] || {...product, count:0};

      if(Math.max(productInCart.count+ count, 0) > 0){
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      //Borrar el producto
      const {[product.id]: toDelete, ...rest}= oldShoppingCart;
      return rest;

      // if(count===0){

      //   const {[product.id]: toDelete, ...rest}= oldShoppingCart;

      //   return {
      //     ...rest
      //    }
      // }
      // return{
      //   ...oldShoppingCart,
      //   [product.id]: {...product, count}
      // }
    }); 

    console.log('count', count);

  }

  return (
  <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        
        {
          // products.map( p =>(
          <ProductCard 
          key={products[0].id} 
          product={products[0]} 
          className="bg-dark" 
          // onChange={(e)=>onProductChange(e)}
          // value={shoppingCart[p.id]?.count||0}
          initialValues={{
            count:4,
            maxCount:15,
          }}
          >

          {
            ({count, 
              increaseBy,
              isMaxCountReached,
              maxCount,
              product,
              reset})=>(
              <>
                <ProductCard.Image className="custom-image"/>
                <ProductCard.Title className="text-white"/>
                <ProductCard.Buttons className="custom-buttons" />
                
                <button onClick={reset}>Reset</button>
                
                <button onClick={()=>increaseBy(-2)}>-2</button>

                { !isMaxCountReached && <button onClick={()=>increaseBy(+2)}>+2</button> }

                <span>{count} - {maxCount}</span>
              </>
            )
          }
          
          </ProductCard>
          // ))
        }

        <div className="shopping-cart">
        { 
        //Objet.entries(shoppingCart).map(([key, product])=>)
        
        
        // Object.values(shoppingCart).map(p => 
        //     <ProductCard 
        //     key={p.id} 
        //     product={p} 
        //     className="bg-dark" 
        //     style={{width:'100px'}} 
        //     // onChange={(e)=>onProductChange(e)}
        //     // value={p.count}
        //     >
        //         <ProductCard.Image className="custom-image"/>
        //         <ProductCard.Title className="text-white"/>
        //         <ProductCard.Buttons className="custom-buttons" />
        //     </ProductCard>
        //   )
        }
         
        </div>
        
        

        {/* <ProductCard product={product} style={{background:'#70D1F8'}}>
          <>
            <ProductCard.Image style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>

            <ProductCard.Title style={{fontWeight:'bold'}}/>

            <ProductCard.Buttons style={{
              display:'flex',
              justifyContent:'end'}}/>
          </>
        </ProductCard> */}

        <div>
          <code>{JSON.stringify(shoppingCart,null,5)}</code>
          </div>
    </div>
  </div>);
};

export default ShopingPage;
