// Initialize Firebase
var config = {
    apiKey: "AIzaSyBxQH9ipz9ON5WuZpSTVC_uGxFaFGVWS9E",
    authDomain: "onlineshop-53dbd.firebaseapp.com",
    databaseURL: "https://onlineshop-53dbd.firebaseio.com",
    projectId: "onlineshop-53dbd",
    storageBucket: "onlineshop-53dbd.appspot.com",
    messagingSenderId: "410688597272"
};
firebase.initializeApp(config);

function* autoGen(){
    var counter = 1;
    while(true){
        yield counter;
        counter++;
    }
}