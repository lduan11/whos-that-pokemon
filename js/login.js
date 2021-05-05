var provider = new firebase.auth.GoogleAuthProvider();

let googleLogin = function () {
    firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result.user);
        var user = result.user;


    }).catch((error) => {
        console.log(error);
  });
}

let googleLogout = function () {
    firebase.auth().signOut().then(() => {
        console.log("Signed out!");
    }).catch((error) => {
        console.log(error);
    });
}