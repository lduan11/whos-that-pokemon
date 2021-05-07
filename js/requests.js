let getRandomIndex = function (min, max) {
    // Minimum is inclusive, maximum is exclusive
    return Math.floor(Math.random() * (max - min) + min);
}

let getRandomPokemonGuess = async function (id) {
    let root = document.getElementById('root');
    root.innerHTML = '';

    const result = await axios({
        method: 'get',
        url: `https://pokeapi.co/api/v2/pokemon/${id}`
    });

    if (firstLoad) {
        if (curUser) {
            $('#infoText').html(`Good luck, ${curUser.displayName}!`);
        } else {
            $('#infoText').html("Good luck, trainer!");
        }
    }

    // Check if the pokemon image exists (if not, get another random pokemon)
    $.get(`https://pokeres.bastionbot.org/images/pokemon/${result.data.id}.png`).done(function() { 
        root.appendChild(renderPokemonGuessCard(result.data));

        $('#infoCard').removeClass("is-hidden");
        $('#infoCard').fadeIn();

        // Reassign event listeners
        $("#guessButton").off();
        $("#guessButton").on('click', function () {
            handleGuessButtonClick(result.data);
        });

        $("#skipButton").off();
        $("#skipButton").on('click', function () {
            handleSkipButtonClick(result.data);
        });

        $("#resetButton").off();
        $("#resetButton").on('click', function () {
            handleResetButtonClick();
        });

        $("#guessField").off();
        $('#guessField').keypress(function (e) {
            if (e.key === 'Enter') {
                handleGuessButtonClick(result.data);
            }

            if (e.key === '/') {
                handleSkipButtonClick(result.data);
            }
        });

        // Hide error text
        $('#errorText').hide();

        // Fade out info card
        setTimeout(function() {
            $('#infoCard').fadeOut();
        }, 1000);
    }).fail(function() { 
        getRandomPokemonGuess(getRandomIndex(1, 494));
    })
}

let getRandomEncouragement = async function () {
    try {
        const result = await axios({
            method: 'get',
            url: "https://type.fit/api/quotes"
        });

        return result.data[validIndices[getRandomIndex(0, validIndices.length)]].text;
    } catch (error) {
        return "Don't give up!"
    }
}
