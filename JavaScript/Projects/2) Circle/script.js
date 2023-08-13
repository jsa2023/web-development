const circleEl = document.querySelector('#circle');

circleEl.addEventListener('mouseover', (e) => {
    circleEl.style.height = '500px';
    circleEl.style.width = '500px';
    e.stopPropagation();
});

document.addEventListener('mouseover', () => {
    circleEl.style.height = '300px';
    circleEl.style.width = '300px';
});