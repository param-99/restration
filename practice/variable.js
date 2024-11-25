// document.getElementById("demo").innerHTML="hi param";
// document.write("param");
// window.alert("param");
// console.log(33-6);
// window.print();

// let a ,b,c ;
// a=2;
// b=5;
// c= a+b ;
// document.getElementById("demo").innerHTML=c;
// function myFunction(){
// document.getElementById("demo").innerHTML="param" + " " + "gupta";
// document.getElementById("demo").style.color="green";
// }

// function myFunction(){
//     document.getElementById("demo").innerHTML= 4 + 6 + "1" ;
// }

// var -> can redeclare

// function myFunction(){
//     var $ = "param" ;                                        can be used
//     var $ = 4 ;
//     document.getElementById("demo").innerHTML= $ ;
// }

// function myFunction(){
//     let $ = "param" ;                                            cannot be used
//     let $ = 4 ;
//     document.getElementById("demo").innerHTML= $ ;
// }

// function myFunction(){
//     const $ = "param" ;                                            cannot be used
//      $ = 4 ;
//     document.getElementById("demo").innerHTML= $ ;
// }

// function myFunction(){                                               
//     document.getElementById("demo").innerHTML= 16 + 4 + "param" ;    L -> R
// }                                                                    20param

// function myFunction(){                               
//     document.getElementById("demo").innerHTML=   "param" + 16 + 4 ;      param164
// }

// function myFunction(){
//     let x = 3 ;           number
//     x = "param"           string                                           
//     document.getElementById("demo").innerHTML= x ; 
// }

// function myFunction(){
//     let x = 44.00 ;          44
//     let y = 44 ;             44
//     let z = 44.56 ;          44.56
//     document.getElementById("demo").innerHTML =  z ;
    
    
// }

// function myFunction(){
//     let x = 123e7 ;
//     let y = 123e-5 ;
//     let z = 123.e3 ;
//     document.getElementById("demo").innerHTML = x + "<br" + y + "<br" + z ;
// }

// function myFunction(){
//      let x = BigInt(1234567899023456789456) ;                        mathematical operation
//     document.getElementById("demo").innerHTML = x ;                  can not be solved with bigInt
// } 

// function myFunction(){
//     let x = 4 ;
//     let y = 4 ;
//     let z = 5 ;
// document.getElementById("demo").innerHTML = (x==y) + "<br>" + (y==z) ;
// } 

// function myFunction(){
//     let arr = ["param" , "saurav", "bhanu"] ;
//     document.getElementById("demo").innerHTML = arr  + "<br>" + arr[0]; 
// }

// function myFunction(){
//     let identity = {
//         firstname : "param" ,
//         lastname : "gupta" ,
//         age : 19 ,

//     } ;
//     document.getElementById("demo").innerHTML = 
//     identity.firstname + " " + identity.lastname +  " " + "is" + " " +  identity.age + " " + "years old" ;

// }

// function myFunction(){
//     let book = {
//         bookname : "life of pi" ,
//         page : 500 ,

//     } ;                                                                                   typeof    
//     document.getElementById("demo").innerHTML = typeof book + " <br>" +
//    "book name is considered as " + " " + typeof book.bookname + "<br>" + 
//    "page is considered as "+ " " + typeof book.page ;
// }

// function myFunction1(x ,y){
//     return x +y ;
// }

// function myFunction(){
//     let ans = myFunction1(3,6) ;
//     document.getElementById("demo").innerText = 
//     ans ;
// }

// function sum(x,y){
//     return x + y ;
// }
// let value = sum();
// function myFunction(){                                   act as a function result
//     document.getElementById("demo").innerHTML = 
//     value ;
// }

// function square(x,y){
//     return x * x ;
// }
// let result = square;
// function myFunction(){                                               act as a function 
//     document.getElementById("demo") . innerHTML = 
//     result ;
// } 

// function square1(x){
//     return x * x ;
// }
// let answer = "The final answer is " + " " +  square1(4) ;               function can be used as 
// function myFunction(){                                                      variable
//     document.getElementById("demo").innerText = 
//     answer ;
// }

//  function myfunction(){
//     alert("hello") ;
//  }
//  myfunction() ;                                              call

// function myFunction(){
//     const car = {
//         type : "BMW" ,
//         price : 50000000 ,
//         model : 2024 ,
//     } ;
//     document.getElementById("demo").innerHTML = 
//     "The price of " +
//     car.type + " " + "model " + " " + car.model +
//     " " + "is" +   " " +car.price ;

// }

// function myfunction(){
//     const car = {} ;                                                        empty object
//     car.type = "BMW" ;
//     car.price = 233265 ;
//     car.model = 2024 ;
//     document.getElementById("demo").innerHTML =
//     car.type ;
// }

// function myFunction(){
//     const car = {
//         type : "lamborgani" ,
//         model : 2024 ,                                       properties
//         price : 2000000 ,
//     };
//     let x = "type" ;
//     document.getElementById("demo").innerText = car[x]  + " " + car["model"] + " " + car.price ;  
// }

// function myFunction(){
//     const book = {
//         page : 233 ,
//         author : "param" ,
//     };
//     delete book.author ;
//     book.price = 3289 ;
//     document.getElementById("demo").innerHTML = 
//     book.author + "   " + book.price ;
//  }
 
// function myFunction(){
//     const car = {
//         car1 : "bad" ,
//         car2 : "average" ,
//         car3 : {
//             good : "fortuner" ,
//             verygood : "audi" ,
//             excellemt : "BMW" ,
//         }
//     };
//     document.getElementById("demo").innerHTML = 
//     car.car3.excellemt ;
// }

// function myFunction(){
//     const car = {
//         good : "audi" ,
//         excelent : function(){
//            return (this.good ).toUpperCase();                       method
//         }                                                               .toUpperCase
//     };
//     document.getElementById("demo").innerHTML = 
//     car.excelent() ;

// }

// function myFunction(){
//     const car = {
//         good : "audi" ,
//         excellent : "BMW" ,

//     };                                                               display object using loop
//     let text = "" ;
//     for(let x in car){                                                       x is a loop variable
//         text += car[x] + " " ;
//     } ;                                                                      car.x in not work
//     document.getElementById("demo").innerHTML = 
//     text ;
// }

// function myFunction(){
//     const car = {
//         good : "audi" ,
//         excellent : "BMW" ,                                  object.values()

//     };
//  const arr = Object.values(car) ;
//     document.getElementById("demo").innerHTML = 
//     arr ;
// }

// function myFunction(){
//    const car = {
//        good : "audi" ,
//        excellent : "BMW" ,                                  //object.entries()
//    };
// let text = "" ;
//     for(let [car,quality] of Object.entries(car)){
// text += car + " : " + quality + "<br>" ;
//     };
//     document.getElementById("demo").innerHTML = 
//     text ;
// } ;

// function myFunction(){
//     const car = {
//         good : "audi" ,
//         excellent : "BMW" ,                                 //JSON.stringify()

//     };
//  const string = JSON.stringify(car) ;
//     document.getElementById("demo").innerHTML = 
//     string ;
// }

// function myFunction(){
//     function carname(good ,excellent){
//         this.good  = good ;
//         this.excellent = excellent ;
//     } ;
//     const car = new carname("audi" , "bmw");
//     const bike = new carname("ktm" , "bmw") ;                    //    object constructor
//     carname.prototype.price = 344 ;
//    document.getElementById("demo").innerHTML = 
//    car.excellent + " " + bike.good  + " " + bike.price;
                                      
//     } 

// function myFunction(){
//     function person(first ,last ,age){
//         this.firstname = first ;
//         this.lastname = last ;
//         this.age = age ;

//     };
//     const brother = new person("vijay" , "gupta" , 20) ;
//     const sister= new person ("anisha" , "gupta", 14) ;           //  method in object construtor
//      sister.changeage = function(age){
//         this.age = age ;
//     }
//     sister.changeage(12) ;
//     document.getElementById("demo").innerHTML = 
//     sister.age ;
// }
    
// function myfunction(){
//     document.getElementById("demo").innerHTML = 
//     displayDate() ;
// };


// function myFunction(){
//     let text = "qiuweynxeulnxiuenlkmgdnciuynliuamau" ;
//     document.getElementById("demo").innerHTML = text.length ;
// }

function myFunction(){
    let text = "hello" ;
    const arr = text.split("") ;
    let text1 = "" ;
   for(let x in arr)   {
        text1 += arr[x] + "<br>" ;
    }
    document.getElementById("demo").innerHTML = 
    text1 ;
}



