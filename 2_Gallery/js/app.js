document.addEventListener("DOMContentLoaded", function(){
const pictures = document.querySelectorAll("img")
const body = document.querySelector("body")


for (var i = 0 ; i < pictures.length; i++) {
   pictures[i].addEventListener('click' , function(){

//necessary full screen elements into variables
       let fullScreen = document.createElement("div");
       let fullImg = document.createElement("img");
       let clsBtn = document.createElement("button");

//adding proper classes to the newly created elements
       fullScreen.setAttribute("class", "fullScreen");
       fullImg.setAttribute("src", this.getAttribute("src"));
       clsBtn.setAttribute("class", "close");
       clsBtn.innerText="X";

//appending it all to body
       fullScreen.appendChild(fullImg);
       fullScreen.insertBefore(clsBtn, fullImg);
       body.appendChild(fullScreen);

//exit button functionality
       clsBtn.addEventListener("click", function(){
           fullScreen.parentElement.removeChild(fullScreen)
       });
   });
}

});
