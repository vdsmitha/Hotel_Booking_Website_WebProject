loginTemplate();
footerTemplate();

function loginTemplate(){
    let login = '<div class="col-sm-4">'+
    '<img class="logo" src="assests/images/logo.png" alt="logo">'+
    '</div>'+
    '<div class="col-sm-4"></div>'+
    '<div class="col-sm-4">'+
        '<button type="button" class="btn btn-default btn-sm" id="login" data-toggle="modal" data-target="#myModal">LOGIN</button>'+
    '</div>';
    document.getElementById('header').innerHTML += login;
   
}
function footerTemplate(){
    let footer = '<div class="col-md-4">'+
    '<div>'+
        '<button type="button" class="btn btn-info btn-sm" id="contact">Contact Us</button>'+
    '</div>'+
'</div>'+
'<div class="col-md-4" id="copyright">© 2020 ROOM SEARCH PVT. LTD.</div>'+
'<div class="col-md-4" >'+
    '<div class="icons">'+
        '<a href="https://www.facebook.com/" target="_blank"><img class="social" src="assests/images/facebook.png"></a>'+
        '<a href="https://www.instagram.com/" target="_blank"><img class="social" src="assests/images/instagram.png"></a>'+
        '<a href="https://www.twitter.com/" target="_blank"><img class="social" src="assests/images/twitter.png"></a>'+
    '</div>'+
'</div>';
document.getElementById('footer').innerHTML += footer;
}
