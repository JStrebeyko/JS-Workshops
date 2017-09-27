document.addEventListener("DOMContentLoaded", () => {

// Let's say our menu will be constituted with two classes of menus:
// for the main ones - "mains", while for the hidden ones - "subs"
// Let's have proper variables, then:

    const mains = document.querySelectorAll(".nav>ul>li");
    console.log(mains);

    const subs = document.querySelectorAll(".nav>ul>li>ul");
    console.log(subs);

// Now, let's give our main menu proper styling (through
// a CSS class)...
    for (let i = 0; i < mains.length; i++) {
        mains[i].classList.add("main");
// ...and event listeners toggling "invisible" CSS class of subs,
// whenever the cursor enters of leaves <li> having more than one
// child (because then it's probably having a sub <ul> beside an <a>)
        mains[i].addEventListener("mouseover", () => {
            if (mains[i].children.length > 1) {
                mains[i].children[1].classList.toggle("invisible")
            }
        })
        mains[i].addEventListener("mouseout", () => {
            if (mains[i].children.length > 1) {
                mains[i].children[1].classList.toggle("invisible")
            }
        })
    }
// Let's give our sub menus proper stylin' through giving 'em
// two classes - a sub class and an invisibility class.
    for (let i = 0; i < subs.length; i++) {
        subs[i].classList.add("sub");
        subs[i].classList.add("invisible");
    }


});
