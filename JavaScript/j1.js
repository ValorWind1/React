var d = new Date();

var time = new Date(); 

console.log("today is :"+ d);

if (time.getHours > 12 ){
    console.log("Time  is :" +time.getHours()+" AM")
     

}else{
    console.log("Time is :" +time.getHours()+" PM")
     
}

document.body.innerHTML = "<h1> Time is :"  + time  + "</h1>" 

var days;

switch(d.getDay()){
    case 0 :
        days = "Sunday";
        break;
    case 1 :
        days = "Monday";
        break;
    case 2 :
        days = "Tuesday";
        break;
    case 3 :
        days = "Wednesday";
        break;
    case 4 :
         days = "Thursday";
        break;
    case 5 :
        days = "Friday";
        break;
    case 6 :
        days = "Saturday";
        break;
   
      

}
console.log("day is : " +days)
document.body.innerHTML = "<h1> Today is :"  + days  + "</h1>"  

