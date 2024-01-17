let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// function toggleStyleMenu() {
// darkMode = !darkMode;
// document.body.style.backgroundColor = darkMode ? '#1a1a1a' : 'white';
// document.body.style.color = darkMode ? 'white' : 'black';
// }

let character = [];

function renderCharacterList(characters) {
    const listCharacters = document.querySelector("#list-characters")
    console.log(characters);
}
const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(characters => {
        renderCharacterList(characters)
    })

}


    


// fetch('https://dummyjson.com/products/search?q=phone')
// .then(res => res.json())
// .then(console.log);




            