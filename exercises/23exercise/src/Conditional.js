import React from 'react';

function Conditional (props) {
    // condition ? statement if true: statement if false
    return(
    <div>
        
        {/* // conditional rendering 
        // however App. js is usually where u want to do ur Conditional */}
         {/* {props.isLoading === true ?  <h1>Loading ...</h1> : <h1>Some cool stuff about conditional rendering</h1>} */}

         <h1>Some cool stuff about conditional rendering </h1>

    </div>
    )
    // long way of doing it 
//     if(props.isLoading === true){
//         return (
//             <h1>Loading ...</h1>
//         )
//     } else { 
//     return(

//         <h1>Some cool stuff about conditional rendering</h1>

//     )
//   }
}

export default Conditional; 