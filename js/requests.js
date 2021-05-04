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

    // Reassign event listeners
    $("#guessButton").off();
    $("#guessButton").on('click', function () {
        handleGuessButtonClick(result.data);
    });

    $("#skipButton").off();
    $("#skipButton").on('click', function () {
        handleSkipButtonClick(result.data);
    });

    $("#guessField").off();
    $('#guessField').keypress(function (e) {
        if (e.key === 'Enter') {
            handleGuessButtonClick(result.data);
        }
    });

    // Enable buttons
    $('#skipButton').attr("disabled", false);
    $('#guessButton').attr("disabled", false);
}

getRandomPokemonGuess(getRandomIndex(1,152));



// let getAllGenOnePokemon = async function () {

//     let root = document.getElementById('root');
//     root.innerHTML = '';

//     const result = await axios({
//         method: 'get',
//         url: ''
//     });

// }