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