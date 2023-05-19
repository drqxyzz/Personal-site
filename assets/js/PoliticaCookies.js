function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function cookieConsent() {
    if (!getCookie('allowCookies')) {
        $('#cookies').show();
    }else{
        $('#cookies').hide();
    }
    $("#cookies").addClass("show");
}
jQuery(document).ready(function($) {
    $('#btnDeny').click(function(e){
        e.preventDefault();
        eraseCookie('allowCookies');
        $('#cookies').hide();
    })
    $('#btnAccept').click(function(e){
        e.preventDefault();
       setCookie('allowCookies','1',7);
        $('#cookies').hide();
    })
    cookieConsent();
});