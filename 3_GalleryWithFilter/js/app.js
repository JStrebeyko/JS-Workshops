document.addEventListener("DOMContentLoaded", function(){

//creating  DOM variables
    const pictures = document.querySelectorAll("div img");
    const show = document.querySelector("#showButton");
    const hide = document.querySelector("#hideButton");
    const input = document.querySelector("#tagInput");
//adding events
        show.addEventListener("click", () => {
            let text=input.value;
            for (i=0; i<pictures.length; i++) {
                if (text != "" && pictures[i].dataset.tag.indexOf(text)>=0){
                    pictures[i].classList.remove("invisible");
                }
            }
        });
        hide.addEventListener("click", () => {
            let text=input.value;
            for (i=0; i<pictures.length; i++) {
                if (text != "" && pictures[i].dataset.tag.indexOf(text)>=0){
                    pictures[i].classList.add("invisible");
                }
            }
        });
//TODO:create functionality based on tag-buttons

// const spans = document.querySelectorAll("span");
//
//     for (i=0; i<spans.length; i++) {
//         spans[i].addEventListener("click", () => {
//             let text=spans[i].innerText

//     }}
});
