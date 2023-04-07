const burger=document.querySelector(".burger");
const navMenu=document.querySelector(".navmenu");



burger.addEventListener("click", () => {

     burger.classlist.toggle("active");
    navMenu.classlist.toggle("active");



})



document.querySelectorAll("nav-link").forEach(n =>n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}
))