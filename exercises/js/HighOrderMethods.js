const companies = [

    {name: " Company One", category:"Finance", start : 1981, end: 2003 },
    {name: " Company Two", category:"Retail", start : 1992, end: 2008 },
    {name: " Company Three", category:"Auto", start : 1999, end: 2007 },
    {name: " Company Four", category:"Retail", start : 1989, end: 2010 },
    {name: " Company Five", category:"Technology", start : 2009, end: 2014 },
    {name: " Company Six", category:"Finance", start : 1987, end: 2010 },
    {name: " Company Seven", category:"Auto", start : 1986, end: 1996 },
    {name: " Company Eight", category:"Technology", start : 2011, end: 2016 },
    {name: " Company Nine", category:"Retail", start : 1981, end: 1989 }
    
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//forEach
// easier way (better) to loop through an aray instead of using a for loop . 
for (let i = 0 ; i < companies.length; i ++) {
    console.log(companies[i]);
}

// for each 
companies.forEach(function(i) {
    console.log(i);
});

// if we want a specific value 
companies.forEach(function(i){
    console.log(i.name)
});


// --------------------------


//filter
// allows ut to filter stuff from the array . 

let Twenty1Over = [];

for (let i = 0 ; i < ages.length; i ++) {
    if (ages[i] >= 21 ){
        Twenty1Over.push(ages[i]);
    }
}

console.log(Twenty1Over);


// let Ageslessthan = [];

// for (let i = 0 ; i < ages.length; i++){
//     if (ages[i] <= 21 ){
//         Ageslessthan.push(ages[i])
//         Ageslessthan.sort()
//     }
// }

// console.log(Ageslessthan);


const canDrink = ages.filter(function(i){
    if(i >= 21 ) {
        return true;
    }

});

const canDrink2 = ages.filter(i => i >= 21) ;

console.log(canDrink2)

//filtering companies categories === retail 

const retailCompanies = companies.filter(function(i){
    if(i.category === 'Retail') {
        return true ; 
    }
});

console.log(retailCompanies);


//usign arrow functions 
const retailCompanies2 = companies.filter(i => i.category === 'Retail');

console.log(retailCompanies2)

// filtering companies based on therir start time period = 80's 
const Start80 = companies.filter(i => i.start <= 1989);
console.log(Start80);


const Start802 = companies.filter(function(i){
    if ( i.start <= 1989){
        return true;
    }

});
console.log(Start802);

// companies that lasted atleast 10 years 
const lastedten = companies.filter(i => i.end - i.start >= 10);
console.log(lastedten)

const lasted10 = companies.filter(function(i){
    if (i.end - i.start >= 10){
        return true;
    }

});
console.log(lasted10)




// -----------------------------------------------------


//map
// we can create new arrays from a current array 
const companyNames = companies.map(function(i){
    return i.name;

});
console.log(companyNames)

 const nameofcompanies = companies.map(i => i.name);
 console.log(nameofcompanies)

 // test map 
const test = companies.map(function(i){
    return i.name +" "+ i.start +" "+ i.end;
})
console.log(test)

const test2 = companies.map(i => i.name +" "+ i.start +" "+ i.end);
console.log(test2)

// math object square every number in the ages array . 
const square = ages.map(function(i){
    return Math.sqrt(i);

})

console.log(square);
// multiply by 2 every element in ages 
const multiply2 = ages.map(i => i * 2);
console.log(multiply2);

// using 2 maps at the same time 
const squareandmultiply = ages.map( i => Math.sqrt(i) * 2);
console.log(squareandmultiply)
// or 

const squareandmultiply2 = ages.map(i =>    Math.sqrt(i))
                                .map(i => i * 2 );
console.log(squareandmultiply2)


// ----------------------------------------------------------

//sort
// sorting companies by start year 
const sortedCompanies = companies.sort(function(i,x){
    if(i.start > x.start){
        return 1 ;
    }else {
        return -1 ;
    }


});

console.log(sortedCompanies);

const sortedCompanies2 = companies.sort(( i,x) => (i.start > x.start ? 1 : -1 ));

console.log(sortedCompanies2);


// sort by ages 
const sortingAges = ages.sort((i,x ) => i - x );
console.log(sortingAges);

// -----------------------------------------------------------



//reduce

// examples of getting the total sum of ages array

let agesum = 0 ; 
for(let i = 0 ; i < ages.length ; i ++){
    agesum += ages[i];
}
console.log(agesum);

const agesum2 = ages.reduce(function(total , age){
    return total + age;
}, 0 ); // this 0 means that it will start at 0 
console.log(agesum2);


const agesum3 = ages.reduce((a , b ) => a + b, 0);
console.log(agesum3);


// Get total years for all companies 

const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
},0 );

console.log(totalYears);

const totalyears2 = companies.reduce((total, company) => total +(company.end - company.start),0);
console.log(totalyears2);


// all of high order methods combined  

const combined = ages
.map(i => i * 2)   // array of ages times 2 
.filter(i => i >= 40) // filter out anything under 40 
.sort((i,x) => i - x) // sort them lowest to highest 
.reduce((i,x) => i + x, 0 ) ; // sum all og them together       

console.log(combined)