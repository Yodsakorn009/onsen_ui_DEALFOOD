var firebaseConfig = {
    apiKey: "AIzaSyB8DLmN_Jt83kKk1DddsjRzb4k0WOun03Y",
    authDomain: "deal-food.firebaseapp.com",
    databaseURL: "https://deal-food.firebaseio.com",
    projectId: "deal-food",
    storageBucket: "deal-food.appspot.com",
    messagingSenderId: "698439684492",
    appId: "1:698439684492:web:f68a5e596deb986360c6a9",
  };
//   Initialize Firebase
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
        
    $("#login").click(function () {
        $("#content")[0].load("login.html");  
        $("#sidemenu")[0].close();   
      }); 

        $("#home").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('index.html')
                .then(menu.close.bind(menu));
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
