// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtxbe5OiESRmYU4mMeeg-o-uxBEbpYQxk",
    authDomain: "kwitter1-10bba.firebaseapp.com",
    databaseURL: "https://kwitter1-10bba-default-rtdb.firebaseio.com",
    projectId: "kwitter1-10bba",
    storageBucket: "kwitter1-10bba.appspot.com",
    messagingSenderId: "521796167249",
    appId: "1:521796167249:web:d93aac8fc6cf1a0a12ba70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logOut() {
    localStorage.removeItem("Room name");
    localStorage.removeItem("User name");
    window.location = "jindex.html";
}

function BBB() {
    var c = localStorage.getItem("Room name");
    document.getElementById("room").innerHTML = "Welcome to room : " + c + " ✨✨✨";
}

var x = localStorage.getItem("User name");
var y = localStorage.getItem("Room name");

function send() {
    var msg = document.getElementById("message").value;
    firebase.database().ref("Room name").push({
        name: x ,
        message: msg , 
        like: 0
    });

    document.getElementById("message").innerHTML = "";

}

function getData() {
    firebase.database().ref("/" + y).on("value" , function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot){
            childKey = childSnapshot.key;
            child_Data = childSnapshot.value();
            if (childKey != "purpose") {
                var firebase_message_id = childKey;
                var message_data = child_Data;
                console.log(firebase_message_id);
                console.log(message_data);
            }
        });
    });
}
getData();
