import React from 'react';
import ReactDom from 'react-dom';


function MyInfo () {
    return(
    <div>
        
        <h1>Daniel Leyghton </h1>
        <p>Hello , I like to code and play the guitar</p>
        <ul>
            <li>Japan</li>
            <li>France</li>
            <li>Iceland</li>
        </ul>

    </div>
    
    )
}


ReactDom.render(<MyInfo /> , document.getElementById('root'));