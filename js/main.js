
// sign up inputs
var username = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var signinBtn = document.getElementById("signup");






function save(){

    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");
    var userName = document.getElementById("userName");

    if(savedEmail == email.value){
        text.style.color = "red";
        text.innerHTML = "email already exists"
    }
    else{
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        text.innerHTML = "Success";
        text.style.color = "rgb(14, 231, 14)";
       
        console.log("success");
    }
   

}


    

// sign in inputs 
var signinMail = document.getElementById("usermail");
var signinPass = document.getElementById("password");
var text = document.getElementById("text");







function check(){
    var savedEmail = localStorage.getItem("email");
    var savedPassword = localStorage.getItem("password");
    var userName = document.getElementById("userName");
    var name = localStorage.getItem("username");

      if (signinMail.value === savedEmail && signinPass.value === savedPassword) {
        console.log("success");
        window.location.href= "login.html";
        userName.innerHTML = name;

    
    } else {
        console.log("بريد إلكتروني أو كلمة مرور غير صحيحة");
        text.innerHTML= "incorrect email or password"
        text.style.color = "red";

    }
   
}
