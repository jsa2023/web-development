const jokesEl = document.getElementById('joke');
const btnEl = document.querySelector('.btn');


console.log(jokesEl);

console.log(btnEl);

// btnEl.addEventListener('click', () => {
//     console.log('button clicked!');
// })


btnEl.addEventListener('click', generateJoke)
 async function generateJoke(){
    const config = {
        headers: {
            Accept: "application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com", config)

    const data = await res.json() // // will change the response fetched from the api into JSON format

    console.log(res, "res");
    console.log(data, "data");

    jokesEl.innerHTML = data['joke'];

}

// // Muhammad Tanveer
/**
 * Research on async vs synx programming
 * 
 * practice them a lot! show me 5 examples of each one
 */