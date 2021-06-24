document.getElementById("signup").onclick = function() {  
signupClick()  
};
document.getElementById("login").onclick = function() {  
loginClick()  
};

function signupClick() {
var signupButton = document.getElementById("signup")
signupButton.innerHTML = "Loading...";
// hideMenu();
}  
function loginClick() {  
var loginButton = document.getElementById("login")
loginButton.innerHTML = "Loading...";
// hideMenu();
}

// function hideMenu(){
//   var signupButton = document.getElementById("signup")
//   var loginButton = document.getElementById("login")
//   var loginText = document.getElementsByClassName("login")[0];
//   loginText.style.display = "none";
//   signupButton.style.display = "none";
//   loginButton.style.display = "none";
// }

// function showSignUp(){
  
// }
// function showLogin(){
// var elements = document.getElementsByClassName("fscontainer");
// elements.forEach(myFunction);
// }
// function myFunction(item) {
//   item.style.display("solid");
// }