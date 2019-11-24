import React from 'react';
import products from './vschoolProducts';
import Product from './components/Product';



function App (){
  
  const appData = products.map( i => <Product key={i.id} name={i.name} price = {i.price} 
  description = {i.description} />)



  return(
    <div>
      {appData}
      
    </div>

  )
}

export default App;