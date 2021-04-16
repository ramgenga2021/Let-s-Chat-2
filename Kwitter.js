
//ADD YOUR FIREBASE LINKS

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCKozXCLg3Ipz4nBi27ze1E1gSbl4eAWLk",
    authDomain: "classtest-c6c96.firebaseapp.com",
    databaseURL: "https://classtest-c6c96-default-rtdb.firebaseio.com",
    projectId: "classtest-c6c96",
    storageBucket: "classtest-c6c96.appspot.com",
    messagingSenderId: "446376829096",
    appId: "1:446376829096:web:d657b3660cb38ea823a29d",
    measurementId: "G-LR54SV20FF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


function adduser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    window.location = "Kwitter_room.html";
}