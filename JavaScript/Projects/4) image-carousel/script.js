const imageContainer = document.querySelector('.image-container');
const imgs = document.querySelectorAll('.image-container img');

const rightBtn = document.getElementById('right');
const leftBtn = document.getElementById('left');

let interval = setInterval(run, 3000);
let idx = 0;

function run() {
    idx++;
    changeImage();
    console.log(idx);
}

function changeImage() {
    if (idx > imgs.length - 1) {
        idx = 0;
        imageContainer.classList.remove('transition');
    }

    if (idx < 0) {
        idx = imgs.length - 1;
    }

    if (!imageContainer.classList.contains('transition') && idx !== 0 && idx !== 3) {
        imageContainer.classList.add('transition');
    }
    imageContainer.style.transform = `translateX(-${idx * 100}%)`;
};

rightBtn.addEventListener('click', () => {
    clearInterval(interval);
    run();
    interval = setInterval(run, 2000);
});

leftBtn.addEventListener('click', () => {
    clearInterval(interval);
    if (idx == 0) {
        imageContainer.classList.remove('transition');
        idx = 2;
    }
    else {
        idx -= 2;
    }

    run();
    interval = setInterval(run, 2000);
});


// const carousel = document.querySelector('.carousel');
// const imageContainer = document.querySelector('.image-container');
// const images = document.querySelectorAll('.image');
// const rightBtn = document.querySelector('#right');
// const leftBtn = document.querySelector('#left');
// const imgs = document.getElementById("imgs");
// const img = document.querySelectorAll("#imgs img")


// console.log(img);

// // rightBtn.addEventListener('click', () => {
// //     imageContainer.classList.add('active');
// // });

// // // the index which represent the images
// let idx = 0;

// let interval = setInterval(run, 2000) // run after every 2 seconds

// function run(){
//     idx++
//     changeImage()
//     console.log(idx);
// }

// function changeImage(){
//     if(idx > img.length - 1){ // it will reset the image to the first one
//         idx = 0
//     } else if(idx < 0){ // if we move backwards at the first image showthe last image  in that case
//         idx = img.length - 1

//     }

//     imgs.style.transform = `translateX(${-idx * 500}px)`

// }

// // // when i click the right btn

// rightBtn.addEventListener('click', () => {
//    idx++
//    changeImage()
// console.log(idx);

// })

// // // when i click the left btn
// leftBtn.addEventListener('click', () => {
//     idx--
//     changeImage()
// })


// console.log(idx);


// /***
//  * Homework:
//  * Figure out the way to start and stop the setInterval in JS 
//  * hint: Research on stack overflow
//  * 
//  * also look for more features and try to apply them on the sa