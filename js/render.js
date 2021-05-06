let renderPokemonGuessCard = function (pokemon) {
    let card = document.createElement('div');
    card.classList.add("card");
    card.setAttribute('id', 'guessCard');

    let cardContent = document.createElement('div');
    cardContent.classList.add("card-content", "has-text-centered");

    let picture = document.createElement('figure');
    picture.classList.add("image", "can-auto-size", "silhouette", "is-inline-block");
    picture.setAttribute('id', 'guessImage');
    picture.innerHTML = `<img height="300" width="300" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">`;

    cardContent.appendChild(picture);
    card.appendChild(cardContent);

    return card;
}

let handleGuessButtonClick = function (pokemon) {
    let guessField = $('#guessField');
    let infoCard = $('#infoCard');
    let infoText = $('#infoText');

    let skipButton = $('#skipButton');
    let guessButton = $('#guessButton');
    let resetButton = $('#resetButton');

    let handleCorrectGuess = function (pokemon) {
        // Clear guess field
        guessField.val('');

        // Disable input field
        guessField.attr("disabled", true);

        // Disable buttons
        skipButton.attr("disabled", true);
        guessButton.attr("disabled", true);
        resetButton.attr("disabled", true);

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

        // Ho-Oh
        case (250):
            canonName = 'Ho-Oh'
            break;
        
        // Deoxys
        case (386):
            canonName = 'Deoxys'
            break;

        // Porygon-Z
        case (474):
            canonName = 'Porygon-Z'
            break;
        
        // Every other pokemon
        default:
            canonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
        }
        
        // Update info text
        infoText.html(`Correct! It was <strong>${canonName}</strong>!`)

        // Fade in info text
        infoCard.fadeIn();
        
        // Show unfiltered pokemon
        $('#guessImage').removeClass('silhouette');

        setTimeout(function() {
            // Enable field
            guessField.attr("disabled", false);

            // Enable buttons
            skipButton.attr("disabled", false);
            guessButton.attr("disabled", false);
            resetButton.attr("disabled", false);

            // Focus onto input field
            document.getElementById("guessField").focus();

            // Render new guess card
            getRandomPokemonGuess(getRandomIndex(1, 494));
        }, 2500);
    }

    let handleIncorrectGuess = async function () {
        let errorText = $('#errorText');
        let guessButton = $('#guessButton');

        // Disable guess button
        guessButton.attr("disabled", true);

        let encouragement = await getRandomEncouragement();

        // Fade in error text
        errorText.html("Try again! " + `${encouragement}`);
        errorText.fadeIn();

        setTimeout(function() {
            // Fade out error text
            errorText.fadeOut();

            // Enable guess button
            guessButton.attr("disabled", false);
        }, 2500);
    }

    if (guessField.val().length == 0) {
        let errorText = $('#errorText');

        // Fade in error text
        errorText.html("Guess can't be empty!");
        errorText.fadeIn();

        // Fade out error text
        setTimeout(function() {
            errorText.fadeOut();
        }, 1000);
    } else {
        switch(pokemon.id) { // pokemon.name doesn't match canonical name
            // Nidoran (female)
            case (29):
                if (guessField.val().toLowerCase() == 'nidoran') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;

            // Nidoran (male)
            case (32):
                if (guessField.val().toLowerCase() == 'nidoran') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;

            // Farfetch'd
            case (83):
                if (guessField.val().toLowerCase() == "farfetch'd" || guessField.val().toLowerCase() == 'farfetchd') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;

            // Mr. Mime
            case (122):
                if (guessField.val().toLowerCase() == 'mr. mime' || guessField.val().toLowerCase() == 'mr mime') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;

            // Ho-Oh
            case (250):
                if (guessField.val().toLowerCase() == 'ho-oh' || guessField.val().toLowerCase() == 'ho oh') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;

            // Deoxys
            case (386):
                if (guessField.val().toLowerCase() == 'deoxys') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;

            // Porygon-Z
            case (474):
                if (guessField.val().toLowerCase() == 'porygon-z' || guessField.val().toLowerCase() == 'porygon z') {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
                break;
            
            // Every other pokemon
            default:
                if (guessField.val().toLowerCase() == `${pokemon.name}`) {
                    handleCorrectGuess(pokemon);
                } else {
                    handleIncorrectGuess();
                }
        }
    }
}

let handleSkipButtonClick = function (pokemon) {
    let guessField = $('#guessField');
    let infoCard = $('#infoCard');
    let infoText = $('#infoText');

    let skipButton = $('#skipButton');
    let guessButton = $('#guessButton');
    let resetButton = $('#resetButton');

    // Clear guess field
    guessField.val('');

    // Disable input field
    guessField.attr("disabled", true);

    // Disable buttons
    skipButton.attr("disabled", true);
    guessButton.attr("disabled", true);
    resetButton.attr("disabled", true);

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

    // Ho-Oh
    case (250):
        canonName = 'Ho-Oh'
        break;

    // Deoxys
    case (386):
        canonName = 'Deoxys'
        break;

    // Porygon-Z
    case (474):
        canonName = 'Porygon-Z'
        break;
    
    // Every other pokemon
    default:
        canonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    }

    // Update info text
    infoText.html(`Skipped! It was <strong>${canonName}</strong>!`);

    // Fade in info card
    infoCard.fadeIn();

    // Show unfiltered pokemon
    $('#guessImage').removeClass('silhouette');

    setTimeout(function() {
        // Enable field
        guessField.attr("disabled", false);

        // Enable buttons
        skipButton.attr("disabled", false);
        guessButton.attr("disabled", false);
        resetButton.attr("disabled", false);

        // Focus onto input field
        document.getElementById("guessField").focus();

        // Render new guess card
        getRandomPokemonGuess(getRandomIndex(1, 494));
    }, 2500);
}

let handleResetButtonClick = function () {
    // Clear guess field
    $('#guessField').val('');

    // Update info text
    if (curUser) {
        $('#infoText').html(`Good luck, ${curUser.displayName}!`);
    } else {
        $('#infoText').html(`Good luck, trainer!`);
    }
        
    // Update 'correct' and 'skip' counts
    $('#correctCount').html('0');
    $('#skipCount').html('0');
    getRandomPokemonGuess(getRandomIndex(1, 494));
}