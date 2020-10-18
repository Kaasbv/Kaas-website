window.addEventListener("load", initfaq);

function initfaq(){
    var buttons = document.querySelectorAll(".faqCollapse");
    for(var button of buttons){
        button.addEventListener("click", toggleFaq);
    }
}

function toggleFaq(){
    var clickedButton = event.targetElement;
    var section = clickedButton.nextElementSibling;

    clickedButton.classList.toggle("active");

    if (section.style.display === "block") {
        section.style.display === "hidden"
    }
    else {
        section.style.display === "hidden"
    }
}