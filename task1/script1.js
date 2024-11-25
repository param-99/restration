
//     var firstname = document.getElementById("firstname ").value   ;
//     var lastname = document.getElementById("lastname").value ;
//     var email= document.getElementById("email").value ;   
   var password= document.getElementById("password").value ;
     var conformpassword = document.getElementById("conformpassword").value ;
//     var male = document.getElementById("male").value ;
//     var female= document.getElementById("female").value ;   
//     var home= document.getElementById("home").value ;
//     var mobile= document.getElementById("mobile").value ;
//     console.log(firstname) ;
    //var pwd = document.getElementById("password").value ;



// function data(){


//         if(pwd == ""){ 
//         alert("password must not be empty ") ;
//     }
//     if(pwd < 8){
//         alert("password should greater than 8") ;

//     }
//     if(pwd > 16){
//         alert("password should greater than 8") ;
//     }




//     if(firstname==""||lastname==""||email==""||password==""||conformpassword==""||(male==""||female=="")||home==""||mobile==""){
//        alert("All Field are mendatory") ;
//        //return false ;

        
//     }
     if(password!=conformpassword){
        alert("please enter same password") ;
       // return false ;
    }
    // else{
       
    //     //return true ;
    // }
   



// document.getElementById('form1').addEventListener('submit',function(event)
// {
//     event.preventDefault();
//     let firstname = document.getElementById('firstname').value ;
//     let lastname = document.getElementById('lastname').value ;
//     let email = document.getElementById('email').value ;
//     let mobile = document.getElementById('mobile').value ;
//     const formData = {
//      firstname : firstname ,
//      lastname : lastname ,
//      email : email ,
//      mobile : mobile ,
//     } ;
//     saveFormData(formData)
// }) ;
//  function saveFormData(formData){
//         const storedformData = JASON.parse(localStorage.getItem('formData') ) || [] ;
//         storedformData.push(formData) ;
//         localStorage.setItem('formData' , JSON.stringify(storedformData)) ;
//  }
// }







 let form = document.getElementById("form1") ;
 let detail = document.querySelector(".students") ;
 let firstname = form['firstname'] ;
 let lastname = form['lastname'] ;
 let email = form['email'] ;
 let mobile = form['mobile'] ;

 let students = JSON.parse(localStorage.getItem("students")) || [] ;
   
 


 let addperson = (firstname , lastname , email , mobile ) => {
    students.push({
         firstname ,
        lastname ,
         email ,
         mobile

    }) ;
   localStorage.setItem("students",JSON.stringify(students));

    return { firstname , lastname , email , mobile} ;
 } ;
let creatdetail = ({firstname , lastname , email , mobile}) => {
    let personDiv = document.createElement('div') ;
    let personfirstname = document.createElement('h2') ;
    let personlastname = document.createElement('h2') ;
     let personemail = document.createElement('p') ;
    let personmobile = document.createElement('p') ;

//   personfirstname .innerText = "first name : " + firstname ;
//   personfirstname .innerText = "last name : " + lastname ;
//   personfirstname .innerText = "email:      " + email   ;
//   personfirstname .innerText = "mobile:     " + mobile ;

//   personDiv.append(personfirstname , personlastname ,personemail,personmobile ) ;
//   detail.appendChild(personDiv) ;
//  detail.style.display = students.length==0  ?"none" : "flex" ;


 } ;
 students.forEach( creatdetail) ;

 form.onsubmit = e =>{
    e.preventDefault() ;

    const newperson = addperson(
        firstname.value ,
        lastname.value,
        email.value ,
        mobile.value 

    ) ;
    creatdetail(newperson ) ;
    firstname.value = "" ;
    lastname.value = "" ;
    email.value = "" ;
    mobile.value = ""  ;
 } ;
 


















 select rollno from student ;
 where roll 