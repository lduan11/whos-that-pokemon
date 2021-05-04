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

let handleGuessButtonClick = function (pokemon) {
    let guessField = $('#guessField');

    let handleCorrectGuess = function () {
        // Clear guess field
        guessField.val('');

        // Update 'correct' count
        let correctCount = $('#correctCount');
        let correctCountNum = correctCount.html();
        correctCountNum++;
        correctCount.html(correctCountNum);

        // Render new guess card
        getRandomPokemonGuess(getRandomIndex(1,152));
    }

    if (guessField.val().length == 0) {
        console.log("empty");
    } else {
        switch(pokemon.id) { // pokemon.name doesn't match canonical name
            // Nidoran (female)
            case (29):
                if (guessField.val().toLowerCase() == 'nidoran') {
                    handleCorrectGuess();
                } else {
                    console.log("you suck");
                }
                break;

            // Nidoran (male)
            case (32):
                if (guessField.val().toLowerCase() == 'nidoran') {
                    handleCorrectGuess();
                } else {
                    console.log("you suck");
                }
                break;

            // Farfetch'd
            case (83):
                if (guessField.val().toLowerCase() == "farfetch'd" || guessField.val().toLowerCase() == 'farfetchd') {
                    handleCorrectGuess();
                } else {
                    console.log("you suck");
                }
                break;

            // Mr. Mime
            case (122):
                if (guessField.val().toLowerCase() == 'mr. mime' || guessField.val().toLowerCase() == 'mr mime') {
                    handleCorrectGuess();
                } else {
                    console.log("you suck");
                }
                break;
            
            // Every other Kanto Region pokemon
            default:
                if (guessField.val().toLowerCase() == `${pokemon.name}`) {
                    handleCorrectGuess();
                } else {
                    console.log("you suck");
                }
        }
    }
}

let handleSkipButtonClick = function () {
    // Update 'skip' count
    let skipCount = $('#skipCount');
    let skipCountNum = skipCount.html();
    skipCountNum++;
    skipCount.html(skipCountNum);

    // Render new guess card
    getRandomPokemonGuess(getRandomIndex(1,152));
}