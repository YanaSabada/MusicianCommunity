const config = {
    apiKey: "AIzaSyAAI-SqMAMI-UraXLMTSZrsPFEoxciMcxg",
    authDomain: "chatactivity-7b747.firebaseapp.com",
    databaseURL: "https://chatactivity-7b747.firebaseio.com",
    projectId: "chatactivity-7b747",
    storageBucket: "chatactivity-7b747.appspot.com",
    messagingSenderId: "847169115768",
    appId: "1:847169115768:web:88953cb383d6aebe"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(user => {
   if (user != undefined) {
       var img = document.createElement("img");
       img.style = "width: 200px; height: 200px";
       img.onload = function() {
           document.getElementById("Ava").appendChild(img);
       }
       img.src = user.photoURL;
       img.onload = function() {
           document.getElementById("Ava").appendChild(img);
       }


   }
});