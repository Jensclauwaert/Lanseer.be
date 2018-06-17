function main(){

var closed = document.getElementsByClassName("hamburger")[0];
var opened = document.getElementsByClassName("hamburgerhid")[0];
var secret = document.getElementsByClassName("hiddenNav")[0];

closed.onclick = function(){
 secret.style.height = "100vh";

 console.log("test");
 };

 opened.onclick = function(){
  secret.style.height = "0vh";

  };

}


window.onload = function () {
 main();
};
