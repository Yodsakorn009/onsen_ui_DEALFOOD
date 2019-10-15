var firebaseConfig = {
    apiKey: "AIzaSyB8DLmN_Jt83kKk1DddsjRzb4k0WOun03Y",
    authDomain: "deal-food.firebaseapp.com",
    databaseURL: "https://deal-food.firebaseio.com",
    projectId: "deal-food",
    storageBucket: "deal-food.appspot.com",
    messagingSenderId: "698439684492",
    appId: "1:698439684492:web:f68a5e596deb986360c6a9",
    measurementId: "G-MLYZ9HKFQM"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//   var db = firebase.firestore();

  

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
        $("#home").click(function () {
            var content = document.getElementById('content');
            var menu = document.getElementById('menu');
            content.load('index.html')
                .then(menu.close.bind(menu));
        });
  
    }

    

});
