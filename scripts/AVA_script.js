// ==UserScript==
// @name         Unesc autologin
// @version      1
// @description  autologin AVA Unesc
// @author       Luan
// @match        https://ead.unesc.net/ava/entrar.php?areaEnsino=20171
// @require      http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==

(function() {
    $('#login').val('HERE YOU PUT YOUR CODE');
    $('#password').val('HERE YOU PUT YOUR PASSWORD');
    $('.btn').click();
})();
