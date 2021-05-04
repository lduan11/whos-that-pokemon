let renderPokemonGuessCard = function (pokemon) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('id', 'guessCard');

    let cardContent = document.createElement('div');
    cardContent.classList.add("card-content", "has-text-centered");

    let picture = document.createElement('figure');
    picture.classList.add("image", "silhouette", "is-inline-block");
    picture.setAttribute('id', 'guessImage');
    picture.innerHTML = `<img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">`;

    cardContent.appendChild(picture);
    card.appendChild(cardContent);

    return card;
}

let handleGuessButtonClick = function (pokemon) {
    let guessField = $('#guessField');
    let infoCard = $('#infoCard');
    let infoText = $('#infoText');

    let handleCorrectGuess = function (pokemon) {
        // Clear guess field
        guessField.val('');

        // Disable buttons
        $('#skipButton').attr("disabled", true);
        $('#guessButton').attr("disabled", true);

        // Update 'correct' count
        let correctCount = $('#correctCount');
        let correctCountNum = correctCount.html();
        correctCountNum++;
        correctCount.html(correctCountNum);

        // Convert pokemon.name to canonical name
        let canonName = ""
        
        switch (pokemon.id) {
           // Nidoran (female)
           case (29):
            canonName = 'Nidoran (female)'
            break;

        // Nidoran (male)
        case (32):
            canonName = 'Nidoran (male)'
            break;

        // Farfetch'd
        case (83):
            canonName = "Farfetch'd"
            break;

        // Mr. Mime
        case (122):
            canonName = 'Mr. Mime'
            break;
        
        // Every other Kanto Region pokemon
        default:
            canonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        }
        
        // Update info text
        infoText.html(`Correct! It was ${canonName}!`)

        // Fade in info text
        infoCard.fadeIn();
        
        // Show unfiltered pokemon
        $('#guessImage').removeClass('silhouette');

        setTimeout(function() {
            infoCard.fadeOut();

            // Render new guess card
            getRandomPokemonGuess(getRandomIndex(1,152));
        }, 3000);
    }

    if (guessField.val().length == 0) {
        console.log("empty");
    } else {
        switch(pokemon.id) { // pokemon.name doesn't match canonical name
            // Nidoran (female)
            case (29):
                if (guessField.val().toLowerCase() == 'nidoran') {
                    handleCorrectGuess(pokemon);
                } else {
                    console.log("you suck");
                }
                break;

            // Nidoran (male)
            case (32):
                if (guessField.val().toLowerCase() == 'nidoran') {
                    handleCorrectGuess(pokemon);
                } else {
                    console.log("you suck");
                }
                break;

            // Farfetch'd
            case (83):
                if (guessField.val().toLowerCase() == "farfetch'd" || guessField.val().toLowerCase() == 'farfetchd') {
                    handleCorrectGuess(pokemon);
                } else {
                    console.log("you suck");
                }
                break;

            // Mr. Mime
            case (122):
                if (guessField.val().toLowerCase() == 'mr. mime' || guessField.val().toLowerCase() == 'mr mime') {
                    handleCorrectGuess(pokemon);
                } else {
                    console.log("you suck");
                }
                break;
            
            // Every other Kanto Region pokemon
            default:
                if (guessField.val().toLowerCase() == `${pokemon.name}`) {
                    handleCorrectGuess(pokemon);
                } else {
                    console.log("you suck");
                }
        }
    }
}

let handleSkipButtonClick = function (pokemon) {
    let guessField = $('#guessField');
    let infoCard = $('#infoCard');
    let infoText = $('#infoText');

    // Clear guess field
    guessField.val('');

    // Disable buttons
    $('#skipButton').attr("disabled", true);
    $('#guessButton').attr("disabled", true);

    // Update 'skip' count
    let skipCount = $('#skipCount');
    let skipCountNum = skipCount.html();
    skipCountNum++;
    skipCount.html(skipCountNum);

    // Convert pokemon.name to canonical name
    let canonName = ""
        
    switch (pokemon.id) {
       // Nidoran (female)
       case (29):
        canonName = 'Nidoran (female)'
        break;

    // Nidoran (male)
    case (32):
        canonName = 'Nidoran (male)'
        break;

    // Farfetch'd
    case (83):
        canonName = "Farfetch'd"
        break;

    // Mr. Mime
    case (122):
        canonName = 'Mr. Mime'
        break;
    
    // Every other Kanto Region pokemon
    default:
        canonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    }

    // Update info text
    infoText.html(`Skipped! It was ${canonName}!`);

    // Fade in info card
    infoCard.fadeIn();

    // Show unfiltered pokemon
    $('#guessImage').removeClass('silhouette');

    setTimeout(function() {
        infoCard.fadeOut();

        // Render new guess card
        getRandomPokemonGuess(getRandomIndex(1,152));
    }, 3000);
}