/**
 * Syllogism
 * 
 * All men are mortal
 * Socrates is a man
 * Therefore Socrates is also mortal
 */


function ManConstructor(name,immortality,height) {
    this.name = name;
    this.mortal = true;
    this.immortality = false;
    this.height = height;
    if (immortality) {
        this.immortality = true;
        this.mortal = false;
    }
}

let Socrates = new ManConstructor('Socrates',false,169);
let Huzaifa = new ManConstructor('Huzaifa',false,170);
let Jafar = new ManConstructor('Jafar',false,168);
let Superman = new ManConstructor('Superman',true,175);
let Kratos = new ManConstructor('Kratos',true,172);

people = [Socrates,Superman,Jafar,Huzaifa,Kratos];

    // console.log(Jafar);

    // if(socrates.mortal === true){
    //     console.log("Socrates is mortal");
    // }


    // if(socrates.name === "Socrates"){
    //     if(socrates.mortal === true){
    //         console.log("The man is socrates and he is mortal");
    //     }
    // }


    // let allMen = [socrates, Huzaifa, Jafar, Superman, Kratos];

    // if(allMen[0].name === "Socrates"){
    //     console.log("Socrates found");
    // }


    // for(i = 0; i < allMen.length; i++){
    //     if(allMen[i].name === "Socrates"){
    //         console.log("Socrates is a man, he is found at position ", i);
    //         console.log("All men are mortal");
    //     }
    //     else { 
    //         console.log(allMen[i].name + " is not Socrates but he is mortal, he was found at position " + i)
    //     }
    // }

    for (i = 0; i < people.length; i++) {
        name = people[i].name;
        mortal = people[i].mortal;
        immortal = people[i].immortality;

        if (mortal) {
            console.log(name+" is a mortal, therefore he is a man");
        }

        if (immortal) {
            console.log(name+" is immortal, therefore he is not a man");
        }
    }

/**
 * Make another scenario for this syllogism using logical operator
 */

for (i = 0; i < people.length; i++) {
    name = people[i].name;
    height = people[i].height;
    if (height >= 170) {
        console.log(name+" is tall");
    }
    else {
        console.log(name+" is not really tall");
    }
}

/**
 * We have two cakes
 * Either Vanilla or Chocolate
 * if the cake is not vanilla therefore it must be chocolate
 */

// function Cake(flavour) {
//     this.flavour = flavour
// }

// chocolate = new Cake('chocolate')
// vanilla = new Cake('vanilla')


// if (chocolate.flavour != 'vanilla') {
//     console.log('chocolate cake');
// }




// function Cake(sweetness) {
//     if(sweetness < 6){
//         this.type = "Vanilla"
//     }
//     else{
//         this.type = "Chocolate"
//     }
// }

// let cake1 = new Cake(5)
// let cake2 = new Cake(8)

// if(cake1.type !== "Chocolate"){
//     console.log("The cake is vanilla");
// }

// else{
//     console.log("the cake is chocolate");
// }

