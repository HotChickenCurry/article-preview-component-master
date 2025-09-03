const tooltip = document.querySelector('#tooltip');
const tooltipMobile = document.querySelector('#tooltip-mobile');
const tooltipTriangle = document.querySelector('#tooltip-triangle');
const button = document.querySelector('button');


button.addEventListener('mouseenter', () => {
    if(window.innerWidth >= 640){
        tooltip.classList.toggle('hidden');
        tooltipTriangle.classList.toggle('hidden');
        tooltipMobile.classList.toggle('hidden'); //cancel out hidden
    }
    tooltipMobile.classList.toggle('hidden');
});
button.addEventListener('mouseleave', () => {
    if(window.innerWidth >= 640){
        tooltip.classList.toggle('hidden');
        tooltipTriangle.classList.toggle('hidden');
        tooltipMobile.classList.toggle('hidden'); //cancel out hidden
    }
    tooltipMobile.classList.toggle('hidden');
});

// console.log(button);