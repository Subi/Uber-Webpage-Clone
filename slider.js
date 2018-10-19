let rightArrow = document.getElementById('arrow-right');
let leftArrow = document.getElementById('arrow-left');
let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');

document.addEventListener('click',function(e){
    if(e.target === rightArrow) {
        transformSlider();
        leftArrow.parentElement.style.opacity = 1;
        leftArrow.style.transition = '.3s';
        rightArrow.parentElement.style.opacity = 0;
        circle1.style.background = 'black';
        circle2.style.background = 'white';
        circle2.style.border = '.5px solid black';
    } else if (e.target === leftArrow) {
        transformSlider();
        rightArrow.parentElement.style.opacity = 1;
        rightArrow.style.transition = '.3s';
        leftArrow.parentElement.style.opacity = 0;
        circle2.style.background = 'black';
        circle1.style.background = 'white';
        circle1.style.border = '.5px solid black';

    } else if (e.target === circle1) {
        transformSlider();
        rightArrow.parentElement.style.opacity = 1;
        leftArrow.parentElement.style.opacity = 0;
        circle2.style.background = 'black';
        circle1.style.background = 'white';
        circle1.style.border = '.5px solid black';
    } else if(e.target === circle2) {
        transformSlider();
        leftArrow.parentElement.style.opacity = 1;
        rightArrow.parentElement.style.opacity = 0;
        circle1.style.background = 'black';
        circle2.style.background = 'white';
        circle2.style.border = '.5px solid black';
    }
});


function transformSlider() { 
    let element = document.getElementById('card-container-fluid');
    if(element.classList.contains('animate')) {
        element.classList.remove('animate');
    }  else {
        element.classList.add('animate');
    }
 };
