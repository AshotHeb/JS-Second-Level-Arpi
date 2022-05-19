const burgerBtn = document.querySelector('.burger-menu-button')
const aside = document.querySelector('.aside')
const closeBurgerBtn = document.querySelector('.close-menu-button')

/* Exercise */


burgerBtn.onclick = function (event) {
    event.stopPropagation() //Prevents the parent elements event function
    aside.style.transform = 'translate(0)'

}

closeBurgerBtn.addEventListener('click', function(event){
    aside.style.transform = 'translate(-100%)'
})

/* Events */

//click ,dblclick ,mousedown ,mouseup ,mouseover ,mouseout ,mouseenter ,mouseleave ,mousemove
// burgerBtn.onclick = function () {
//         console.log('Click');
// }

// burgerBtn.ondblclick = function () {
//     console.log('DblClick');
// }

// burgerBtn.onmousedown = function () {
//     console.log('mousedown');
// }

// burgerBtn.onmouseup = function () {
//     console.log('mouseup');
// }

// burgerBtn.onmouseover = function () {
//     console.log('mouseover');
// }

// burgerBtn.onmouseout = function () {
//     console.log('mouseout');
// }


// burgerBtn.onmouseenter = function () {
//     console.log('mouseenter');
// }

// burgerBtn.onmouseleave = function () {
//     console.log('mouseleave');
// }

// burgerBtn.onclick = function (event) {
//     event.stopPropagation() //Prevents the parent elements event function
//     // console.log("🚀 ~ event", event)
//     console.log("🚀 ~ target", event.target)
//     console.log("path" , event.path);
//     console.log('currentTarget' ,event.currentTarget);

// }

// document.body.onclick = function() {
//     console.log('document.body');
// }

