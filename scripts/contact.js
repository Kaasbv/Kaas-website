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