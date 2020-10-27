//Scroll menu
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

window.addEventListener("load", initOurCheese)

function initOurCheese(){
    const cheeseParts = Array.from(document.querySelectorAll('.our_cheese--cheese--part'));
    const cheeseSlide = Array.from(document.querySelectorAll('.our_cheese--slide'));

    for(let cheeseIndex in cheeseParts){
        let cheesePart = cheeseParts[cheeseIndex];

        cheesePart.addEventListener('click', function(){
            resetOurCheese();
            cheeseSlide[cheeseIndex].classList.add('current_slide');
        });
    }
}

function resetOurCheese(){
    const cheeseParts = Array.from(document.querySelectorAll('.our_cheese--cheese--part'));
    const cheeseSlide = Array.from(document.querySelectorAll('.our_cheese--slide'));

    for(let cheeseIndex in cheeseParts){
        cheeseSlide[cheeseIndex].classList.remove('current_slide');
    }
}

function mailFunction() {
  alert("You signed up for the newsletter");
}

function show_alert() 
{
  alert("Form submitted");
}

function checkEmail(mail){
  var regex = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
  if (regex.test(mail.email.value)){
    alert("Form has been submitted")
    return true;
  }
  else{
    alert("Please fill in a valid E-mail adress")
    return false;
  }
}