document.addEventListener("DOMContentLoaded", ()=> {

    const main = document.querySelectorAll(".nav>ul>li");

    for (i = 0; i < main.length; i++) {
        main[i].addEventListener("mouseover", (event) => {
            if (event.target.firstElementChild !== null){
                event.target.firstElementChild.style.display = "inline-block";
            }
        });
        main[i].addEventListener("mouseout", (event) => {
            if (event.target.firstElementChild !== null){
                event.target.firstElementChild.style.display = "none";
            }
        });
    }
});
