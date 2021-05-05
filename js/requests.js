// const brokenImages = [
//     412, 413, 492
// ];

// Manually exclude indices; this takes too much work to upkeep.

// let getRandomIndex = function (min, max, indicesToExclude) {
//     // Maximum is exclusive and minimum is inclusive; we exlcude indicesToExclude
//     let index = null;
//     while (index === null || indicesToExclude.includes(index)) {
//         index = Math.floor(Math.random() * (max - min) + min);
//     }
//     return index;
// }

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

    console.log(result.data);

    // Check if the pokemon image exists (if not, get another random pokemon)
    $.get(`https://pokeres.bastionbot.org/images/pokemon/${result.data.id}.png`).done(function() { 
        root.appendChild(renderPokemonGuessCard(result.data));

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

        $('#guessField').focus()

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

getRandomPokemonGuess(getRandomIndex(1, 494));
