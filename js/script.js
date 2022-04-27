let button=document.getElementById("button").value
let fname=document.getElementById("fname").value
let lname=document.getElementById("lname").value


    function validateForm() {
        document.getElementById("button")
        let a = document.getElementsByClassName("field").value;
        if (a == null || a == "") {
          alert("Բոլոր տեքստային դաշտերը պիտի լինեն լրացված")
         
        }
     
      }
    
  
      function addr_for(){
        let addr = document.getElementById("addr").value;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(addr.match(regexEmail)){
            document.getElementById("email_error").innerHTML="<span style='color: green;'>true</span>"
        }
        else{
            document.getElementById("email_error").innerHTML="<span style='color: red;'>false</span>"
        }
    }
    
   
      function password_func(){
        let pwd=document.getElementById("pwd").value
        let fname=document.getElementById("fname").value
        let lname=document.getElementById("lname").value
        let patt = new RegExp("^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])[a-zA-Z0-9@#$%^&+=]*$");
          if(pwd.length<8 || pwd.length>16 || pwd==fname || pwd==lname ){
              document.getElementById("pwd_error").innerHTML="<span style='color: red;'>false</span>"
          }
          else {
            document.getElementById("pwd_error").innerHTML="<span style='color: green;'>true</span>"
          }

        }
          
      



