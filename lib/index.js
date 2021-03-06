// ==UserScript==
// @name         GitHub Old Header
// @version      1.0.0
// @description  Brings the old header links back.
// @author       Ionică Bizău <bizauionica@gmail.com> (http://ionicabizau.net)
// @match        https://github.com/*
// ==/UserScript==

(function () {

    function $ (sel) {
        var elm = document.querySelector(sel);
        return elm;
    }

    // Get the logged in username
    var me = $(".header-nav.user-nav.right .css-truncate-target").innerHTML;
    if (!me) { return; }

    // Doesn't look so ugly as I expected :)
    $(".header-nav.left").innerHTML = "<li class='header-nav-item'><a href='/explore' class='js-selected-navigation-item header-nav-link'>Explore</a></li>"
      + "<li class='header-nav-item'><a href='https://gist.github.com' class='js-selected-navigation-item header-nav-link'>Gist</a></li>"
      + "<li class='header-nav-item'><a href='/blog' class='js-selected-navigation-item header-nav-link'>Blog</a></li>"
      + "<li class='header-nav-item'><a href='/pulls' class='js-selected-navigation-item header-nav-link'>Pull Requests</a></li>"
      + "<li class='header-nav-item'><a href='/issues' class='js-selected-navigation-item header-nav-link'>Issues</a></li>";

    var newLi = document.createElement("li");
    newLi.setAttribute("class", "header-nav-item");
    newLi.innerHTML = "<a href='/" + me +"' class='js-selected-navigation-item header-nav-link'>" + me + "</a>";
    var avatarLi = $("#user-links .avatar").parentNode.parentNode;
    avatarLi.parentNode.insertBefore(newLi, avatarLi);
})();
