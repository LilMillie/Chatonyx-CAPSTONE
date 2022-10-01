var firebaseConfig = {
    apiKey: "AIzaSyB_WJDJvRs-ilhnrrVMGu-cBgF5CGt4KLo",
    authDomain: "chatonyx-project.firebaseapp.com",
    databaseURL: "https://chatonyx-project-default-rtdb.firebaseio.com",
    projectId: "chatonyx-project",
    storageBucket: "chatonyx-project.appspot.com",
    messagingSenderId: "245982575456",
    appId: "1:245982575456:web:db1750c884e776c9613c05",
    measurementId: "G-XN65GPQBFN"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chatonyx_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id);'>#"+ Room_names +"</div><hr>";
                document.getElementById("output").innerHTML += row;
                //End code
          });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
}