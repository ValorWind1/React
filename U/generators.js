function* gen (){
    yield 1;
      yield 2;
        yield 3;
    }
    ​
    var g = gen();
    ​
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    

    ////////// or using  a for loop 



    function* gen(){
        yield 1;
        yield 2;
        yield 3;
    
    }

    var g =gen ();
    for(let value of g ){
        console.log(value);
    }