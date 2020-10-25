window.addEventListener("scroll", updateMenu)

var schrinked = false;

function updateMenu(){
  var menu = document.querySelector("nav");
  var menuHoogte = parseInt(window.getComputedStyle(menu).height);
  if(window.scrollY + menuHoogte > window.innerHeight && !schrinked){
    menu.classList.add("shrinked-menu");
    schrinked = true;
  }else if(window.scrollY + menuHoogte <= window.innerHeight && schrinked){
    menu.classList.remove("shrinked-menu");
    schrinked = false;
  }
}