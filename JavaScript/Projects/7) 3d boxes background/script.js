const API_KEY = "LPF6zfsl42UeqQFJcZ7XN3p9LjhhsdQv";
let currentImageIndex = 0;
let imageUrls = [];

const boxesContainer = document.getElementById('boxes')

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

btn1.addEventListener("click", () => {
    changeEffect();
})

btn2.addEventListener("click", () => {
    boxesContainer.classList.toggle("big")
})

btn3.addEventListener("click", () => {
    //newImage();
    fetchGiphyImages('trending');
    updateBackgroundImage();
})

btn4.addEventListener('click', () => {
    fetchGiphyImages('random');
    updateBackgroundImage();
});



function createBoxes(){
    // const bigDiv = document.createElement('div')
    // const row1 = document.createElement('div')
    // const row2 = document.createElement('div')
    // const row3 = document.createElement('div')
    // const row4 = document.createElement('div')

    // for (let i = 0; i < 3; i++) {
    //     const box = document.createElement('div')
    //     box.classList.add('box')
    //     row1.appendChild(box)
    //     row2.appendChild(box)
    //     row3.appendChild(box)
    //     row4.appendChild(box)
    // }

    // bigDiv.appendChild(row1)
    // bigDiv.appendChild(row2)
    // bigDiv.appendChild(row3)
    // bigDiv.appendChild(row4)

    // boxesContainer.appendChild(bigDiv)


    for(let i = 0; i < 4; i++){
        for(let j = 0 ; j < 4; j++){
            const box = document.createElement("div")
            box.classList.add("box");
            box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.appendChild(box)
        }
    }
}

// function newImage() {
//     boxElements = boxesContainer.querySelectorAll('.box');
//     //const newImageUrl = 'url("https://media.giphy.com/media/hQyfBDkCCeNjZ24MOY/giphy.gif")';

//     boxElements.forEach((box) => {
//         box.classList.toggle('new-image')
//       });
// }

function changeEffect() {
    boxElements = boxesContainer.querySelectorAll('.box');
    //const newImageUrl = 'url("https://media.giphy.com/media/hQyfBDkCCeNjZ24MOY/giphy.gif")';
    boxesContainer.classList.remove('big')

    boxElements.forEach((box) => {
        box.classList.toggle('change-effect');
      });
}

function fetchGiphyImages(topic) {
    const endpoint = `https://api.giphy.com/v1/gifs/${topic}?api_key=${API_KEY}&limit=25&offset=0&rating=g&bundle=messaging_non_clips`
    fetch(endpoint)
    .then(response => response.json())
    .then(giphyData => {
        imageUrls = giphyData.data.map(gif => gif.images.original.url)
    })
    .catch(error => {
        console.error('Error fetching Giphy images:', error);
      });
}

function updateBackgroundImage() {
    const boxElements = boxesContainer.querySelectorAll('.box');
    if (imageUrls.length > 0) {
        const newImageUrl = imageUrls[currentImageIndex];

        boxElements.forEach((box) => {
            box.style.backgroundImage = `url("${newImageUrl}")`;
        })

        if (currentImageIndex === imageUrls.length - 1) {
            currentImageIndex = 0;
        }
        else {
            currentImageIndex++;
        }
    
    }
}

createBoxes()
fetchGiphyImages()