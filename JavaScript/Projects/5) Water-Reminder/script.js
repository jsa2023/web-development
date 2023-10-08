// // const container = document.querySelector(".big-cup");
// // let fillHeight = 0;

// // container.addEventListener("click", (e) => {
// //     // Increase the fill height by 25% of the container's height
// //     fillHeight += container.clientHeight * 0.25;

// //     // Limit the fill height to the container's height
// //     fillHeight = Math.min(fillHeight, container.clientHeight);

// //     // Set the background gradient to fill the container
// //     container.style.background = `linear-gradient(to top, #3498db ${fillHeight}px, #ffffff ${fillHeight}px)`;
// // });



// // // fresh start

// const smallCups = document.querySelectorAll(".small-cup")
// const liters = document.getElementById("liters")
// const percentage = document.getElementById("percentage")
// const remaining = document.getElementById("remaining")
// const flag = false
// // console.log(smallCups);


// smallCups.forEach((cup, idx) => {
//     cup.addEventListener("click", () => {
//         if (!flag) {
//             flag = true
//         }
//         console.log("Cup", idx, "has been clicked");
//         highlightCups(idx)
//     })
// })


// function highlightCups(idx) {

//     if (idx === 7 && smallCups[idx].classList.contains('full')) {
//         idx--
//     }
//     else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
//         idx--
//     }


//     smallCups.forEach((cup, idx2) => {
//         if (idx2 <= idx) {
//             cup.classList.add("full")
//         } else {
//             cup.classList.remove('full')
//         }
//         // cup.classList.add("full")
//     })
//     updateBigCup()
// }


// function updateBigCup(){
//     const fullCups = document.querySelectorAll(".small-cup.full").length
//     const totalCups = smallCups.length

//     // console.log(fullCups, totalCups);


//     if(fullCups === 0){
//         percentage.style.visibility = 'hidden'
//         percentage.style.height = 0
//         if ()
//     } else {
//         percentage.style.visibility = 'visible'
//         //percentage.style.height = `${fullCups / totalCups * 420}px`
//         percentage.innerText = `${fullCups / totalCups * 100}%`
//     }
// }

const bigCup = document.querySelector('.big-cup');
const smallCups = document.querySelectorAll(".small-cup");
const litres = document.getElementById("litres");
const percentage = document.getElementById("percentage");
let remainder;
let percent = 0;
let fill = 0;
let percentageFilled = 0;
console.log(smallCups);
console.log(bigCup);

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => {
        if (!cup.classList.contains('fill')) {
            fillCups(idx);
            fillBigCup();
            updateLabel();
            updatePercentage();
        }
        else {
            emptyTheCup(idx);
            updateBigCup(idx);
            updateLabel();
            updatePercentage();
        }
    });
    
});

function fillCups(idx) {
    for (let i = 0; i <= idx; i++) {
        if (!alreadyFull(i)) {
        smallCups[i].classList.add('fill');
        fill += 12.5;
        }
    }
}

function alreadyFull(idx) {
    return smallCups[idx].classList.contains('fill');
}

function emptyTheCup(idx) {
    smallCups[idx].classList.remove('fill');
}

function fillBigCup() {
    console.log('Before:','percentageFilled', percentageFilled, 'fill', fill);
    percentageFilled += fill;
    fill = 0
    console.log('After:','percentageFilled', percentageFilled, 'fill', fill);
    bigCup.style.background = `linear-gradient(to top, aqua ${percentageFilled}%, white ${percentageFilled}%)`;
    bigCup.classList.add('smooth');
}

function updateBigCup() {
    percentageFilled -= 12.5;
   
    bigCup.style.background = `linear-gradient(to top, aqua ${percentageFilled}%, white ${percentageFilled}%)`;
}

function updateLabel() {
    remainder = (100 - percentageFilled)/100 * 2;

    litres.innerText = remainder + "L";
}

function updatePercentage() {
    percentage.innerText = percentageFilled + "%";
}