window.addEventListener("load", initfaq);

function initfaq(){
    var buttons = document.querySelectorAll(".faqCollapse");
    for(var button of buttons){
        button.addEventListener("click", toggleFaq);
    }
}

function toggleFaq(event){
    var clickedButton = event.target;
    var section = clickedButton.nextElementSibling;
    clickedButton.classList.toggle("active");
    console.log(section.style.maxHeight)

    if (parseInt(section.style.maxHeight) !== 0 && section.style.maxHeight.length !== 0)  {
        section.style.maxHeight = 0 + "px";
    } else {
        section.style.maxHeight = 100 + "px";
    }
}