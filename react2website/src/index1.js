// aprent , and nesting components 
import React from 'react';
import ReactDom from 'react-dom';

function Test1 () {
    return(

        <li>
            <ul>Hello</ul>
            <ul>Hi</ul>
        </li>


    )
}


ReactDom.render(<Test1 />,document.getElementById('root'));

export default Test1; 