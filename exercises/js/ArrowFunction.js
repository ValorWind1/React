function sum(a , b ) {
    return a + b 
}

// this is the same but as an arrow function 
let sum2 = (a , b ) => {
    return a + b 
}
// however we can reduce it even more : it assumes return , and bracquest so we don't need it. 
let sum3 = (a , b ) =>  a + b 

// --------------------------------------------------------------------------

function isPositive(number) {
    return number >= 0 
}
// ---- this is fine let's reduce it farther ir 
 let isPositive2 = (number) => {
    return number >= 0 
}
// ------
let inPositive3 = (number) => n >= 0
 
// ------------------------------------------------------------------------------


function randomNumber(){
    return Math.random();
}


let randomNumber2 = () => Math.random();
// -------


// arrow functions shine when a method passes another method , annoynous functions
document.addEventListener('click',function ()  {
    console.log('click')
})

document.addEventListener('click', () => console.log('click'))


// arrow functions main key point is that theyr redifine the this keyword . 






console.log(randomNumber());