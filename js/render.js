let renderPokemonGuessCard = function (pokemon) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('id', 'guessCard');

    let cardContent = document.createElement('div');
    cardContent.classList.add("card-content", "has-text-centered");

    let picture = document.createElement('figure');
    picture.classList.add("image", "silhouette", "is-inline-block");
    picture.innerHTML = `<img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">`;

    cardContent.appendChild(picture);
    card.appendChild(cardContent);

    return card;
}

let handleGuessButtonClick = function () {
    console.log("Whomst?");
}

let handleSkipButtonClick = function () {
    getRandomPokemonGuess(getRandomIndex(1,152));
}