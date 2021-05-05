let getRandomIndex = function (min, max) {
    // Maximum is exclusive and minimum is inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
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
    });

    // Hide error text
    $('#errorText').hide();

    // Fade out info card
    setTimeout(function() {
        $('#infoCard').fadeOut();
    }, 1000);
}

let getRandomEncouragement = async function () {
    const result = await axios({
        method: 'get',
        url: "https://type.fit/api/quotes"
    });

    return result.data[validIndices[getRandomIndex(0, validIndices.length)]].text;
}

getRandomPokemonGuess(getRandomIndex(1, 494));


// let getAllGenOnePokemon = async function () {

//     let root = document.getElementById('root');
//     root.innerHTML = '';

//     const result = await axios({
//         method: 'get',
//         url: ''
//     });

// }