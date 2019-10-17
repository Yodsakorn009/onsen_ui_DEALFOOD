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

var db = firebase.firestore();



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



  
  if (page.id === "more") {
    //Code for tabbar
    $("#menubtn").click(function () {
      var menu = document.getElementById('menu');
      menu.open();
    });

     
    
        $("#mf").empty();
        db.collection("home").get().then((querySnapshot) => {
          var item
          querySnapshot.forEach((doc) => {
              
          item = `  
          <ons-card id="foodc">
          <center>
            <ons-toolbar-button  onclick="validate5()"><img src="${doc.data().photoUrl}" alt="Onsen UI"
                    style="width: 90%"></ons-toolbar-button>
                    <div>${doc.data().name}</div>
                  
             </center>
             </ons-card>
           `
             
           
      $("#mf").append(item);
          });
        
        });    
    
  }

  if (page.id === "home") {
    //Code for tabbar
    $("#menubtn").click(function () {
      var menu = document.getElementById('menu');
      menu.open();
    });
    $("#foodmore").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('more.html')
        .then(menu.close.bind(menu));
     
    });


    $("#carousel").empty();
    db.collection("recommended").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          
        var item = `
        <ons-carousel-item modifier="nodivider" id="${doc.data().id}" class="recomended_item">
            <div class="thumbnail" style="background-image: url('${doc.data().photoUrl}')">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
        </ons-carousel-item>`
        
        $("#carousel").append(item);

      });
    });     
    
        $("#mf").empty();
        db.collection("home").get().then((querySnapshot) => {
          var item
          querySnapshot.forEach((doc) => {
              
          item = `  <ons-col  width="50%">
          <ons-card id="foodc">
          <center>
            <ons-toolbar-button  onclick="validate5()"><img src="${doc.data().photoUrl}" alt="Onsen UI"
                    style="width: 90%"></ons-toolbar-button>
                    <div>${doc.data().name}</div>
                  
             </center>
             </ons-card>
             </ons-col>`
             
           
      $("#mf").append(item);
          });
        
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
 
    //Code for tabbar
    $("#more").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('more.html')
        .then(menu.close.bind(menu));
     
    });

    $("#login").click(function () {
      var content = document.getElementById('content');
      var menu = document.getElementById('menu');
      content.load('login.html')
        .then(menu.close.bind(menu));
     
    });

  }
  if (page.id === 'loginPage') {
    

    $("#signinbtn").click(function () {
      var username = $("#username").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(username, password).then(function(result){

      content.load('Home.html')
        .then(menu.close.bind(menu))


       }) .catch(function (error) {
          
          alert('Try Again');


        });

    })
    $("#signup").click(function () {
      $("#content")[0].load("signup.html");
    });



      $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
    
  }
  if (page.id === 'signupPage') {
  
    $("#createbtn").click(function () {
     
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
              firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              
              if(errorCode === 'auth/weak-password'){
                alert(errorMessage);
                          
              }              
              else if(errorCode == 'auth/invalid-email'){
                alert(errorMessage);
              }
              console.log(error);
              
          }
          );
          
       
        });

        $("#backhomebtn").click(function () {
          $("#content")[0].load("login.html");
        });
  }
});
