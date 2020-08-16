$(function(){
    var w = window.innerWidth;
    if (w < 640){
        $('#header').load("../common/navbar_mobile.html");
    }
    else {
        $('#header').load("../common/navbar_desktop.html");
    }
    
});

$(function(){
    $('#footer').load("../common/footer.html");
});