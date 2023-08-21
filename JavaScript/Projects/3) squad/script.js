let data = [
    {
        name: "Huzaifa",
        age: 24
    },
    {
        name: "Martin",
        age: 19
    },
    {
        name: "Luke",
        age: 19
    },
    {
        name: "Nathan",
        age: 19
    },
    {
        name: "Simon",
        age: 19
    },
    {
        name: "David",
        age: 19
    },
    {
        name: "Alan",
        age: 19
    },
    {
        name: "Victor",
        age: 19
    },
    {
        name: "John",
        age: 19
    },
    {
        name: "Jim",
        age: 19
    },
    {
        name: "Silvia",
        age: 19
    },
    {
        name: "Sandra",
        age: 19
    },
]

// for (const prop of data) {
//     const li = document.createElement('li');
//     const span1 = document.createElement('span')
//     const span2 = document.createElement('span')
//     const span3 = document.createElement('span')
//     span1.textContent = prop.name
//     span2.textContent = " - "
//     span3.textContent = prop.age
//     li.appendChild(span1)
//     li.appendChild(span2)
//     li.appendChild(span3)
//     document.getElementById('people').appendChild(li)
// }

const ulEl = document.querySelector('#people');

let details = data.map((prop) => {
    return `<li>${prop.name + " - " + prop.age}</li>`;
})

console.log(details);

ulEl.innerHTML = details.join("");

const horizontalViewBtn = document.querySelector('#horizontal-view-button');
const verticalBtn = document.querySelector('#vertical-view-button');

horizontalViewBtn.addEventListener('click', () => {
    if (!ulEl.classList.contains("horizontal-view")) {
        ulEl.classList.add("horizontal-view");
        ulEl.classList.remove("vertical-view");
        const liTags = document.getElementsByTagName('li');
        console.log(liTags);
    }
});

verticalBtn.addEventListener('click', () => {
    if (!ulEl.classList.contains("vertical-view")) {
        ulEl.classList.add("vertical-view");
        ulEl.classList.remove("horizontal-view");
    }
});