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
