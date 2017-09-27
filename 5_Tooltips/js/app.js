document.addEventListener("DOMContentLoaded", () => {

console.log("whadap")

const tooltipArr = document.querySelectorAll(".tooltip");

console.log(tooltipArr);

const tooltip = document.createElement("span");

const tip = document.createElement("div");


for (let i = 0; i < tooltipArr.length; i++) {
 tooltipArr[i].addEventListener("mouseover", (e) => {
     tooltip.classList.add("tooltipText");
     tooltip.innerHTML = e.target.dataset.text;
     tip.classList.add("tip");
     tooltipArr[i].appendChild(tooltip);
     tooltipArr[i].appendChild(tip)
     tooltip.offsetLeft = tooltip.offsetLeft;
     tooltip.classList.toggle('show')
     tip.offsetLeft = tip.offsetLeft;
     tip.classList.toggle('show')

;

 })
 tooltipArr[i].addEventListener("mouseout", () => {
     tooltipArr[i].removeChild(tooltip);
     tooltipArr[i].removeChild(tip);
     tooltip.classList.toggle("show")
     tip.classList.toggle("show")

     })
}




})
