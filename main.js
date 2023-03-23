						/*TEAM*/
						
$('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        
    }
})	


var icon = document.getElementById("burger-icon");
var menu_item = document.querySelector(".menu-bar");
var gotosec_1 = document.querySelector(".gosec-1");
var gotosec_2 = document.querySelector(".gosec-2");
var gotosec_3 = document.querySelector(".gosec-3");
var gotosec_4 = document.querySelector(".gosec-4");
var gotosec_5 = document.querySelector(".gosec-5");
var gotosec_6 = document.querySelector(".gosec-6");
var gotosec_7 = document.querySelector(".gosec-7");

icon.addEventListener('click',()=>{
    menu_item.style.display ="flex";
});
function notDisplay(){
    menu_item.style.display = "none"
}
gotosec_1.addEventListener('click',()=>{
    notDisplay();
});
gotosec_2.addEventListener('click',()=>{
    notDisplay();
});
gotosec_3.addEventListener('click',()=>{
    notDisplay();
});
gotosec_4.addEventListener('click',()=>{
    notDisplay();
});
gotosec_5.addEventListener('click',()=>{
    notDisplay();
});
gotosec_6.addEventListener('click',()=>{
    notDisplay();
});
gotosec_7.addEventListener('click',()=>{
    notDisplay();
});