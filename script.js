const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector ('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', ()=> {
    var scroll_position = window.scrollY;
    if (scroll_position > 100) {
        header.style.backgroundColor = "rgba(255, 223, 43, 0.8)";
    }
    else {
        header.style.backgroundColor = "transparent"; /*done - initially the background-color is still there, first time loading the page - why? change!*/
    }
})

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})