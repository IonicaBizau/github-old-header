// ==UserScript==
// @name         GitHub Old Header
// @version      1.0.0
// @description  Brings the old header links back.
// @author       Ionică Bizău <bizauionica@gmail.com> (http://ionicabizau.net)
// @match        https://github.com/*
// ==/UserScript==

(function () {
    if (typeof $ === "undefined") {
        return;
    }

    // Get the logged in username
    var me = $(".dropdown-item:contains('Your profile')").attr("href");
    if (!me) { return; }
    me = me.substr(1);

    // Doesn't look so ugly as I expected :)
    $(".header-nav.left").html(
        "<li class='header-nav-item'><a href='/explore' class='js-selected-navigation-item header-nav-link'>Explore</a></li>"
      + "<li class='header-nav-item'><a href='https://gist.github.com' class='js-selected-navigation-item header-nav-link'>Gist</a></li>"
      + "<li class='header-nav-item'><a href='/blog' class='js-selected-navigation-item header-nav-link'>Blog</a></li>"
      + "<li class='header-nav-item'><a href='/pulls' class='js-selected-navigation-item header-nav-link'>Pull Requests</a></li>"
      + "<li class='header-nav-item'><a href='/issues' class='js-selected-navigation-item header-nav-link'>Issues</a></li>"
    );

    // Append the profile link
    $("#user-links .avatar")
      .closest("li")
      .before("<li class='header-nav-item'><a href='/" + me +"' class='js-selected-navigation-item header-nav-link'>" + me + "</a></li>")
      ;
})();
