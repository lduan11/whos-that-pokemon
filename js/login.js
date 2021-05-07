var curUser;
var firstLoad = true;

firebase.auth().onAuthStateChanged(async function (user) {
    if (user) {
        $("#navLogin").hide();
        $("#navSignout").removeClass("is-hidden");
        curUser = firebase.auth().currentUser;
    } else {
        curUser = firebase.auth().currentUser;
    }

    // Equivalent to checking if we are on index.html
    if ($('#infoCard').length != 0) {
        await getRandomPokemonGuess(getRandomIndex(1, 494));
        firstLoad = false;  
    }
});

let googleLogin = function () {
    let provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(() => {
        window.location.href = "index.html";
    });
}

let facebookLogin = function () {
    let provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider).then(() => {
        window.location.href = "index.html";
    });
}

let logout = function () {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    });
}