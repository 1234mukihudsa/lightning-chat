var firebaseConfig = { apiKey: "AIzaSyDE45e0OphdZuX6AW9Z7SspnW-L9gmtKkQ",
authDomain: "lightning-chat-22e93.firebaseapp.com",
databaseURL: "https://lightning-chat-22e93-default-rtdb.firebaseio.com",
projectId: "lightning-chat-22e93",
storageBucket: "lightning-chat-22e93.appspot.com",
messagingSenderId: "864319874978",
appId: "1:864319874978:web:9d445ab26e4d250d25b4fb" };  
 firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="Kwiiter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("room-name" + Room_names);
      row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + " </div> <hr>";
      document.getElementById("output").innerHTML+=row;

      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }