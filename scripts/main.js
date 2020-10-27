window.addEventListener("load", initMenu);

function initMenu(){
  let button = document.querySelector("#menu-icon");
  let menu =  document.querySelector("#menu-links");

  menu.addEventListener("click", function(){
    if(window.innerWidth < 1100){
      menu.style.display = "none";
    }
  });

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