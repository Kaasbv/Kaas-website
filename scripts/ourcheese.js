const cheeseParts = document.querySelectorAll('.our_cheese--cheese--part');
const cheeseSlide = document.querySelectorAll('.our_cheese--slide');

cheeseParts[0].addEventListener('click', e=>{
    cheeseSlide[0].classList.add('current_slide')
    cheeseSlide[1].classList.remove('current_slide')
    cheeseSlide[2].classList.remove('current_slide')
    cheeseSlide[3].classList.remove('current_slide')
});

cheeseParts[1].addEventListener('click', e=>{
    cheeseSlide[0].classList.remove('current_slide')
    cheeseSlide[1].classList.add('current_slide')
    cheeseSlide[2].classList.remove('current_slide')
    cheeseSlide[3].classList.remove('current_slide')
});

cheeseParts[2].addEventListener('click', e=>{
    cheeseSlide[0].classList.remove('current_slide')
    cheeseSlide[1].classList.remove('current_slide')
    cheeseSlide[2].classList.add('current_slide')
    cheeseSlide[3].classList.remove('current_slide')
});

cheeseParts[3].addEventListener('click', e=>{
    cheeseSlide[0].classList.remove('current_slide')
    cheeseSlide[1].classList.remove('current_slide')
    cheeseSlide[2].classList.remove('current_slide')
    cheeseSlide[3].classList.add('current_slide')
});