 function triangleArea (){
     var area = 1/2 * 5 * 6 ;
        console.log(area)
}

triangleArea();

function triangleAreaUserInput(){
    var total ; 
    var a = window.prompt("Type one of ur triangle's sides");
    var b = window.prompt("Type one of ur triangle's sides");

    var total = 1/2 * a * b ;
    console.log(total);
    document.body.innerHTML = "<h1> Area is :"  + total  + "</h1>" 


}

triangleAreaUserInput();