// normal function
function printName(n) {
  console.log(n);
}
printName("Lex");

// arrow functions solves this keyword
const myFnc = i => {
  console.log(i);
};
myFnc("john");

// if we are only JUST returning something
const NoReturn = (x) => x * 2 ; 
console.log(NoReturn(5))

console.log('--------------')

// classes 

class Human2 {
    constructor (){
        this.gender = 'male';
    }
    printGender(){
        console.log(this.gender);
    }
}

// must called the super () if from the derived class
class Person2 extends Human2{
    constructor(){
        super()
        this.name = 'Max'
        // this.gender = 'female'
    }
    printName() {
        console.log(this.name);
    }
}

const PP = new Person2 ();
PP.printName();
PP.printGender();

console.log('--------------')
// modern classes , properties & methods 
// u can skip a contructor called ex down below 
// use arrow functions instead 

class Human {
    gender = 'male';

printGender = () => {
    console.log(this.gender);
}
}

class Person extends Human{

    name = 'max'
    gender = 'female'

printName = () => {
    console.log(this.name);
}
}

const EE = new Person ();
EE.printName();
EE.printGender();
console.log("-----------")
// spread + rest operators ... 

// spread : split array elements or objects props
// both are  ...
// rest : used to merge a list of function argumnents into an array

//Spread
const n = [1,2,3,4,5,6,7,8,9,9];
const nN = [...n , 1000]

console.log(nN)

// Spread
const p = {
    nombre : 'Mac'
};

const nP = {
    ...p,
    age: 7
}
console.log(nP);

console.log('------------')
//Rest is used in a function , merges arguments into an array
const x = (...args) => {
    return args.filter(i => i === 1);
}
console.log(x(1,2,34));

console.log('------------')
// destructuring easily to extract array elements/ objects props and store them in new arrays or objects 

// Array Destructuring 
const numbers = [1,2,3];
[a1,,a2] = numbers;
console.log(a1,a2)


// Object Destructuring 
// {haha} = {
//     apellido : 'ley',
//     dob : 11
// };
// console.log(apellido)
// console.log(dob)

console.log('------------')

// references and primitive types 

const numb = 1;  // primitive type 
const numb2 = numb ; // creates a copy 
console.log(numb2)

//object arrays = references . we copy the same pointer of memory , so they are the same 
const pop = {
    name : 'Max'
}
const secondPop = pop;
console.log(secondPop)


// to create a reall copy that doesnt point to the same pointer  we use  ... 
const thirdPop = {
    ...pop
}
console.log("-----")
pop.name = 'mathew'
console.log(thirdPop)


console.log("-----")
// refresh Array Functions 

const nb = [1,2,3];
const doubleIt = nb.map((i) => {
   return i * 2
});
console.log(nb);
console.log(doubleIt);