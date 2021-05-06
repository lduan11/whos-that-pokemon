var provider = new firebase.auth.GoogleAuthProvider();
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
    firebase.auth().signInWithPopup(provider).then((result) => {
        window.location.href = "index.html";
    }).catch((error) => {
        console.log(error);
    });
}

let googleLogout = function () {
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        console.log(error);
    });
}