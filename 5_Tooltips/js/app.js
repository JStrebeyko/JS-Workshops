document.addEventListener("DOMContentLoaded", () => {

console.log("whadap")

const tooltipArr = document.querySelectorAll(".tooltip");

console.log(tooltipArr);

const tooltip = document.createElement("span");

for (let i = 0; i < tooltipArr.length; i++) {
 tooltipArr[i].addEventListener("mouseover", (e) => {
     tooltip.classList.add("tooltipText");
     tooltip.innerHTML = e.target.dataset.text;
     tooltipArr[i].appendChild(tooltip);
     tooltip.offsetLeft = tooltip.offsetLeft;
     tooltip.classList.toggle('show')

;

 })
 tooltipArr[i].addEventListener("mouseout", () => {
     tooltipArr[i].removeChild(tooltip);
     tooltip.classList.toggle("show")

     })
}




})
