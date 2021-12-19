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
user_name = localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;

 } });  }); }
getData();


function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function send()
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
 });
    document.getElementById("msg").value="";
 
}