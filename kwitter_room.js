var firebaseConfig = {
   apiKey: "AIzaSyD5Dc1IzQBJ0nJ8f5_3dydm64EBf1tUZu0",
   authDomain: "kwitter-618ef.firebaseapp.com",
   databaseURL: "https://kwitter-618ef-default-rtdb.firebaseio.com",
   projectId: "kwitter-618ef",
   storageBucket: "kwitter-618ef.appspot.com",
   messagingSenderId: "784233168188",
   appId: "1:784233168188:web:93efa1912ab2230ec2b239",
   measurementId: "G-EGBJFD5KC1"
 };
 
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name"); 
 document.getElementById("user_name").innerHTML = "Welcome"+ user_name + "!";
    //ADD YOUR FIREBASE LINKS HERE

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
     //End code 
     });});}
  getData();
  
  function addRoom(){
     room_name = document.getElementById("room_name").value;
  
     firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
     });
        localStorage.setItem("room_name", room_name);
  
        window.location = "kwitter_page.html";
  }
  
  function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
   window.location = "kwitter_page.html";
  }
  
  function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
     window.location = "index.html";
  }
  
  

