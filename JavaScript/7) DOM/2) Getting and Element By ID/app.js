
// const allSpans = document.getElementsByTagName("span")

// console.log(allSpans);


// const myID = document.getElementById("app")

// console.log(myID);


// myID.innerText += "<p>we are doing this in JS</p>"
// myID.innerHTML += "<p>we are doing this in JS</p>"

// const idApp = document.getElementById("app")
// console.log(idApp);

// const specificWordInidApp = idApp.getElementsByTagName("p")


// console.log(specificWordInidApp);

// // for (let i = 0; i < specificWordInidApp.length; i++) {
// //     specificWordInidApp[i].innerText = "changed text" + i;
// // }
// let counter = 0
// for (const prop of specificWordInidApp) {
  
//     prop.innerText = `paragraph ${counter} `;
//     counter++
  
// }



const idApp = document.getElementById("app")
const specificWordInidApp = idApp.getElementsByTagName("p")

const totalNumOfWordsChanged = document.getElementById("total")


for (const p of specificWordInidApp) {
    p.innerText = "test"
}

totalNumOfWordsChanged.innerHTML = specificWordInidApp.length

// console.log('Hey');

console.log(specificWordInidApp.length);

const  ulEl = document.getElementById('myList');
const liEls = ulEl.getElementsByTagName('li');

for (const li of liEls) {
    if (li.innerText.includes('4')) {
        li.innerText = "changed text";
       }
}