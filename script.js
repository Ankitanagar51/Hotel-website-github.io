// header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach (function (a) {
    a.addEventListener("click", function(){
            navCollapse.classList.remove("show")
    })

})

//swiper slider

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
            el: ".swiper-pagination",
            clickable : true,
            },
        autoplay: {
            delay:3500,
        },
});


// count number

let display = document.querySelectorAll(".move");
let Interval = 5000;

display.forEach((element)=>{

  let startval = 0;  
 let a  = parseInt(element.getAttribute("data-val"));
 
  let duration = (Interval/a)


  let counter = setInterval(() => {
    startval += 1  
      element.innerHTML = startval; 
      if(a == startval){
        clearInterval(counter);
       }
      
  }, duration);
  
 
})








