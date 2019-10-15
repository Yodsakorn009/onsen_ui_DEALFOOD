var firebaseConfig = {
    apiKey: "AIzaSyCUiwtRUD9RdLqH4KmStlHrccUiqYynaZQ",
    authDomain: "dealfood-ae8f9.firebaseapp.com",
    databaseURL: "https://dealfood-ae8f9.firebaseio.com",
    projectId: "dealfood-ae8f9",
    storageBucket: "dealfood-ae8f9.appspot.com",
    messagingSenderId: "543852763810",
    appId: "1:543852763810:web:28e5fb536995261bcd55fb",
    measurementId: "G-NKTZL9F88H"
  };

  firebase.initializeApp(firebaseConfig);

   var db = firebase.firestore();

  // ดูสถานะการ login
firebase.auth().onAuthStateChanged(function(user) {
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
              $("#content")[0].load("login.html");  
              $("#sidemenu")[0].close();   
            }).catch(function(error) {
              // An error happened.
              console.log(error.message);
            });
          });
        
    $("#login").click(function () {
        $("#content")[0].load("login.html");  
        $("#sidemenu")[0].close();   
      }); 

        $("#home").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('index.html')            
                .then(menu.close.bind(menu));
                $("#sidemenu")[0].close();   
        });
  
    }
    if (page.id === 'loginPage') {
        console.log("loginPage");
    
        $("#signinbtn").click(function(){
          var username = $("#username").val();
          var password = $("#password").val();
          firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
    
            console.log(error.message);
          });
    
        })
    
        $("#backhomebtn").click(function () {
          $("#content")[0].load("home.html");      
        });
      }

    

});
