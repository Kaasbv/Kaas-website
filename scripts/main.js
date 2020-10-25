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


window.addEventListener("load", initMenu);

function initMenu(){
  let button = document.querySelector("#menu-icon");
  let menu =  document.querySelector("#menu-links");

  button.addEventListener("click", function (){
    if(menu.style.display === "none" || !menu.style.display){
      menu.style.display = "block";
    }else{
      menu.style.display = "none";
    }
  });

}

function mailFunction() {
  alert("You signed up for the newsletter");
}

function show_alert() 
{
  alert("Form submitted");
}

