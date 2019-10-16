var firebaseConfig = {
  apiKey: "AIzaSyD-XI0IiRFoNNXmuWeES-pS4Y7Kzygv-l8",
  authDomain: "dealfood-ed34b.firebaseapp.com",
  databaseURL: "https://dealfood-ed34b.firebaseio.com",
  projectId: "dealfood-ed34b",
  storageBucket: "dealfood-ed34b.appspot.com",
  messagingSenderId: "934386896591",
  appId: "1:934386896591:web:f397ee2388552fbe4371ba"
};
firebase.initializeApp(firebaseConfig);

//  var db = firebase.firestore();



// ดูสถานะการ login
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

    var email = user.email;
    console.log(email + "signed in");

  } else {
    console.log("sign out");

  }
});


document.addEventListener('init', function (event) {
  var page = event.target;
  console.log(page.id);

  if (page.id === "tabbar") {
    //Code for tabbar
    $("#menubtn").click(function () {
      var menu = document.getElementById('menu');
      menu.open();
    });
  }

  if (page.id === "sidemenu") {
    //Code for sidemenu

    $("#logout").click(function () {
      //firebase sign out
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
        var content = document.getElementById('content');
        var menu = document.getElementById('menu');
        content.load('login.html')
          .then(menu.close.bind(menu));
        console.log("logout");
        
      }).catch(function (error) {
        // An error happened.
        console.log(error.message);
      });
    });

    $("#login").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('login.html')
        .then(menu.close.bind(menu));
     
    });

  }
  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#signinbtn").click(function () {
      var username = $("#username").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(username, password).then(function(result){

      content.load('Home.html')
        .then(menu.close.bind(menu))


       }) .catch(function (error) {

          console.log(error.message);


        });

    })
$("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
    
  }



});
