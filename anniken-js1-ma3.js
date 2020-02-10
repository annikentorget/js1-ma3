// question 1

const sum = (a, b) => a - b;

// question 2

const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl) 
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        for(let i = 0; i < json.results.length; i++) {
            console.dir(json.results[i].name)
        }
    })
    .catch(function(error) {
        console.dir(error);
    }
);

// question 3

var sentence = "These cats are outrageous";

var sentence = sentence.replace("cats", "giraffes");

console.log(sentence);

// question 4

let url = new URL('https://my.site.com?');
let params = new URLSearchParams(url.search);

if (params.has("userId") === false) {
    document.location.replace("./third.html");
} 
else if (params.get("userId") >= 10) {
    document.location.replace("./second.html");
} 
else if (params.get("userId") < 10) {
    document.location.replace("./first.html");
}

// question 5

const parent = document.querySelector(".container");

const button = document.querySelector(".btn");

parent.removeChild(button);

// question 6

const animalList = document.querySelector(".animals");
const cow = document.querySelector(".cows");
const animal = document.createElement("li");

animal.className = "parrots";

const newAnimal = document.createTextNode("Parrots");

animal.appendChild(newAnimal);

animalList.appendChild(animal);

cow.after(animal);

// question 7

const ratingUrl="https://api.rawg.io/api/games/3801";
fetch(ratingUrl)
.then(function(response) {

    return response.json();
})
.then(function(json) {
    gameRatings(json);
})
.catch(function(error) {
    console.log(error);
})

function gameRatings(json) {
    const ratingText = document.querySelector(".rating");
    const game = json.rating;
    ratingText.innerText = `This games rating is ${game}`;
}