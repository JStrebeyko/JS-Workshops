addEventListener("DOMContentLoaded", function(){

    const next = document.querySelector("#nextPicture");
    const prev = document.querySelector("#prevPicture");
    const slides = document.querySelectorAll("li");

    let picIndex = 0;

    slides[picIndex].classList.add("visible");

    next.addEventListener("click", function(){
        slides[picIndex].classList.remove("visible");
        picIndex++;
            if ( picIndex >= slides.length ){
                picIndex = 0;
            };
        slides[picIndex].classList.add("visible");
    });

    prev.addEventListener("click", function(){
       slides[picIndex].classList.remove("visible");
       picIndex--;
           if ( picIndex < 0 ) {
               picIndex = slides.length - 1 ;
           };
       slides[picIndex].classList.add("visible");
    });
});
