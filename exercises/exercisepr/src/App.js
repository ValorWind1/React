import React from 'react'
import product from './ListProducts';
import ProductComponent from './ProductComponent';

function App (){

  const producData =  product.map( i => {
    return (
      <ProductComponent key={i.id} name={i.name} description={i.description}  />
    )
  })

  return(

    <div>
      
      {producData}

    </div>


  );
}


export default App; 