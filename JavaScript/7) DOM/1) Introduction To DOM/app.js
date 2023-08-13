console.log("Hey there");


/**
 * DOM means document object model
 * 
 * Programming interface for HTML and XML documents
 * its provides a structred representations of the documents
 * it defines methods to access the structure and manipulate it
 * 
 * 
 * it will have the following affects:
 *      connects web pages to scripts and other programming languages
 *      we can access html structure
 * 
 * DOM is NOT a programming language it is just JS it provides a model of a web page
 * 
 * The page content is stored in the DOM and can be accessed and manipulated in javascrip
 * The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods (Search of Mozilla Developer Network further)
 * 
 */


// console.log( typeof document);



// function showAlert(){
//     window.alert("Alerted!!!")
// }
// showAlert()



// window.onload = function () {
//     console.log(document.body); // this works here as its giving a command to the script that wait until the complete html is loaded
//     document.body.innerHTML += "Changed!!!"





// }

var myTag = document.getElementsByTagName("li");

console.log(myTag);

console.log(myTag[0].innerText);
console.log(myTag[1].innerHTML);
console.log(myTag[2].innerText);


const pTags = document.getElementsByTagName('p');
// console.log(pTags[0].innerHTML);
// console.log(pTags[1].innerHTML);
// console.log(pTags[2].innerHTML);


for (let i = 0; i < pTags.length; i++) {
    // console.log(pTags[i].innerText);

    // if(i === 0){
    //     // console.log(pTags[i].innerText = "SHAKA");

    //     pTags[i].innerText = "SHAKA"
    // } else {
    //     // console.log(pTags[i].innerText = "LAKA");
    //     pTags[i].innerText = "LAKA"
    // }

    if (pTags[i].innerText === "more text 3") {
        pTags[i].innerText = "changed the text"
    };

    console.log(pTags[i]);
}



var myStr = "ABC"
console.log(myStr[0]);
console.log(myStr.charAt(0));

for(let i = 0; i < myStr.length;  i++) {
    myStr[i] = 'X';
}

console.log('***********************************');

console.log(typeof pTags);

for (const p of pTags) {
    console.log(p);
}



// // for of loop

// for(let tag of pTags){
//     tag.innerHTML = "Renamed again :DDDD"
// }

// pTags.array.forEach(tag => console.log("text:", tag.innerText));

