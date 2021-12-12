
var firebaseConfig = {
  apiKey: "AIzaSyDE45e0OphdZuX6AW9Z7SspnW-L9gmtKkQ",
  authDomain: "lightning-chat-22e93.firebaseapp.com",
  databaseURL: "https://lightning-chat-22e93-default-rtdb.firebaseio.com",
  projectId: "lightning-chat-22e93",
  storageBucket: "lightning-chat-22e93.appspot.com",
  messagingSenderId: "864319874978",
  appId: "1:864319874978:web:9d445ab26e4d250d25b4fb"
};

firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    
    });});}
getData();
